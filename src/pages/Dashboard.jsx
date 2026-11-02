import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { startJourney, endJourney } from "../api/journeyApi";
import { sendLocation } from "../api/locationApi";
import styles from "../styles/dashboardStyles";

function Dashboard() {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const [journey, setJourney] = useState(null);
  const [location, setLocation] = useState({ lat: null, lon: null });

  const intervalRef = useRef(null);

  const LOCATION_INTERVAL = 90000; // 1.5 min

  const handleToggle = async () => {
    try {
      if (!isActive) {
        const res = await startJourney({
          startLocation: "Current Location",
          endLocation: "Destination"
        });

        const token = res.data.trackingToken;

        setJourney(res.data);
        setIsActive(true);

        // 🔥 First location immediately
        navigator.geolocation.getCurrentPosition(async (pos) => {
          const { latitude, longitude } = pos.coords;

          setLocation({ lat: latitude, lon: longitude });

          await sendLocation({
            trackingToken: token,
            latitude,
            longitude
          });
        });

        // 🔥 Interval updates
        intervalRef.current = setInterval(() => {
          navigator.geolocation.getCurrentPosition(async (pos) => {
            const { latitude, longitude } = pos.coords;

            setLocation({ lat: latitude, lon: longitude });

            await sendLocation({
              trackingToken: token,
              latitude,
              longitude
            });
          });
        }, LOCATION_INTERVAL);

      } else {
        clearInterval(intervalRef.current);

        await endJourney({
          trackingToken: journey?.trackingToken
        });

        setJourney(null);
        setIsActive(false);
        setLocation({ lat: null, lon: null });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.page}>

      {/* NAVBAR */}
      <div style={styles.navbar}>
        <h2 style={styles.title}>Safe Journey</h2>

        <div style={styles.navRight}>
          <div
            style={styles.avatar}
            onClick={() => navigate("/profile")}
          >
            👤
          </div>

          <button onClick={handleLogout} style={styles.logout}>
            Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={styles.content}>

        {/* START / STOP BUTTON */}
        <button
          onClick={handleToggle}
          style={{
            ...styles.circle,
            background: isActive ? "red" : "green"
          }}
        >
          {isActive ? "STOP" : "START"}
        </button>

        {/* LOCATION DISPLAY */}
        {location.lat && (
          <div style={styles.locationBox}>
            <p>Latitude: {location.lat}</p>
            <p>Longitude: {location.lon}</p>
          </div>
        )}

      </div>

    </div>
  );
}

export default Dashboard;