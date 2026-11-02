const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f6fa"
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },

  back: {
    padding: "8px 15px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  },

  userSection: {
    textAlign: "center",
    padding: "30px",
    position: "relative"
  },

  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "#007bff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "35px",
    margin: "0 auto"
  },

  editIcon: {
    position: "absolute",
    right: "30px",
    top: "30px",
    cursor: "pointer"
  },

  userInfo: {
    marginTop: "10px"
  },

  tableHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 30px"
  },

  addButton: {
    background: "#28a745",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    cursor: "pointer"
  },

  tableSection: {
    padding: "20px 30px"
  },

  table: {
    width: "100%",
    background: "#fff"
  },

  update: {
    background: "orange",
    border: "none",
    marginRight: "5px"
  },

  delete: {
    background: "red",
    color: "#fff",
    border: "none"
  },

  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    display: "flex",
    flexDirection: "column"
  },

  input: {
    margin: "5px 0",
    padding: "8px"
  },

  modalActions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px"
  },

  save: {
    background: "green",
    color: "#fff",
    border: "none",
    padding: "5px 10px"
  },

  cancel: {
    background: "gray",
    color: "#fff",
    border: "none",
    padding: "5px 10px"
  }
};

export default styles;