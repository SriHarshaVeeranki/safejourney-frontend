import { useState, useEffect } from "react";
import { addContact, getContacts } from "../api/contactApi";

function Contacts() {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    relation: ""   // ✅ FIXED
  });

  const [contacts, setContacts] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const loadContacts = async () => {
    try {
      const res = await getContacts();
      setContacts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("SENDING DATA:", form); // 🔥 debug

      await addContact(form);
      alert("Contact Added");

      setForm({
        name: "",
        phoneNumber: "",
        email: "",
        relation: ""   // ✅ FIXED
      });

      loadContacts();
    } catch (err) {
      console.error("ERROR:", err.response || err);
      alert("Failed to add contact");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Emergency Contacts</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="phoneNumber"
          placeholder="Phone"
          value={form.phoneNumber}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="relation"
          placeholder="Relation"
          value={form.relation}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add Contact</button>
      </form>

      <br /><br />

      <h3>Saved Contacts</h3>

      {contacts.map((c, index) => (
        <div key={index}>
          <p>
            {c.name} | {c.phoneNumber} | {c.relation}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Contacts;