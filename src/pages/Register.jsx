import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";
import styles from "../styles/registerStyles";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    address: "",
    phoneNumber: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <input name="username" placeholder="Username" onChange={handleChange} style={styles.input}/>
          <input name="email" placeholder="Email" onChange={handleChange} style={styles.input}/>
          <input name="address" placeholder="Address" onChange={handleChange} style={styles.input}/>
          <input name="phoneNumber" placeholder="Phone" onChange={handleChange} style={styles.input}/>
          <input name="password" type="password" placeholder="Password" onChange={handleChange} style={styles.input}/>

          <button type="submit" style={styles.button}>Register</button>
        </form>

        <p>Already have an account?</p>
        <button onClick={() => navigate("/login")} style={styles.link}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Register;