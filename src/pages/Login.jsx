import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import styles from "../styles/loginStyles";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({ email, password });

      // ✅ store token
      localStorage.setItem("token", response.data);

      // ✅ go to dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p>Don't have an account?</p>
        <button onClick={() => navigate("/register")} style={styles.link}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;