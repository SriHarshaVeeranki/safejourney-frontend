import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getContacts, addContact } from "../api/contactApi";
import { getUserDetails, updateUser } from "../api/userApi";
import styles from "../styles/profileStyles";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [contacts, setContacts] = useState([]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    relation: ""
  });

  const [userForm, setUserForm] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    address: ""
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const u = await getUserDetails();
      const c = await getContacts();

      setUser(u.data);
      setContacts(c.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUserChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      await addContact(form);

      setForm({
        name: "",
        phoneNumber: "",
        email: "",
        relation: ""
      });

      setShowAddModal(false);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUserUpdate = async () => {
    try {
      await updateUser(userForm);

      setShowUserModal(false);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.page}>

      {/* NAVBAR */}
      <div style={styles.navbar}>
        <h2>Profile</h2>
        <button onClick={() => navigate("/dashboard")} style={styles.back}>
          Back
        </button>
      </div>

      {/* USER */}
      {user && (
        <div style={styles.userSection}>
          <div style={styles.avatar}>
            {user.username?.charAt(0).toUpperCase()}
          </div>

          <div
            style={styles.editIcon}
            onClick={() => {
              setUserForm(user);
              setShowUserModal(true);
            }}
          >
            ✏️
          </div>

          <h2>{user.username}</h2>

          <div style={styles.userInfo}>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phoneNumber}</p>
            <p><b>Address:</b> {user.address}</p>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div style={styles.tableHeader}>
        <h3>Emergency Contacts</h3>
        <button onClick={() => setShowAddModal(true)} style={styles.addButton}>
          + Add Contact
        </button>
      </div>

      {/* TABLE */}
      <div style={styles.tableSection}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Relation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.phoneNumber}</td>
                <td>{c.relation}</td>
                <td>
                  <button style={styles.update}>Update</button>
                  <button style={styles.delete}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ADD CONTACT MODAL */}
      {showAddModal && (
        <div style={styles.modalOverlay} onClick={() => setShowAddModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>Add Contact</h3>

            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} style={styles.input}/>
            <input name="phoneNumber" placeholder="Phone" value={form.phoneNumber} onChange={handleChange} style={styles.input}/>
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} style={styles.input}/>
            <input name="relation" placeholder="Relation" value={form.relation} onChange={handleChange} style={styles.input}/>

            <div style={styles.modalActions}>
              <button onClick={handleAdd} style={styles.save}>Save</button>
              <button onClick={() => setShowAddModal(false)} style={styles.cancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT USER MODAL */}
      {showUserModal && (
        <div style={styles.modalOverlay} onClick={() => setShowUserModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>Edit Profile</h3>

            <input name="username" value={userForm.username} onChange={handleUserChange} style={styles.input}/>
            <input name="email" value={userForm.email} onChange={handleUserChange} style={styles.input}/>
            <input name="phoneNumber" value={userForm.phoneNumber} onChange={handleUserChange} style={styles.input}/>
            <input name="address" value={userForm.address} onChange={handleUserChange} style={styles.input}/>

            <div style={styles.modalActions}>
              <button onClick={handleUserUpdate} style={styles.save}>Update</button>
              <button onClick={() => setShowUserModal(false)} style={styles.cancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Profile;