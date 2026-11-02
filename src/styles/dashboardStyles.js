const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f6fa"
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },

  title: {
    margin: 0
  },

  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },

  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#007bff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "18px"
  },

  logout: {
    padding: "8px 15px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px"
  },

  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "80px"
  },

  circle: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    border: "none",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer"
  },

  locationBox: {
    marginTop: "25px",
    padding: "15px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  }
};

export default styles;