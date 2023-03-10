import Button from "@mui/material/Button";

export default function NavBar() {
  return (
    <div
      className="navbar bg-base-100"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "white",
        height: "12vh",
        position: "fixed",
        top: "0",
        width: "100vw",
        zIndex: "100",
        color: "black",
        padding: "2vw",
      }}
    >
      <div style={{ display: "flex" }}>
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5673/5673462.png"
            alt="Logo"
            style={{
              maxHeight: "100px",
              maxWidth: "100px",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="green-mountain-movers">Simply Solar</h1>
            <p className="for-when-you-need">A Solar Panel Cleaning Service</p>
          </div>
        </a>
      </div>
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "2vw",
          }}
        >
          <li>
            <a
              href="/services"
              className="btn btn-ghost normal-case"
              style={{ fontSize: "18px" }}
            >
              Services
            </a>
          </li>
          <li className="navList">
            <a
              className="btn btn-ghost normal-case"
              style={{ fontSize: "18px" }}
            >
              About Us
            </a>
          </li>
          <li className="navList">
            <a
              href="/contact"
              className="btn btn-ghost normal-case"
              style={{ fontSize: "18px" }}
            >
              Contact
            </a>
          </li>
          <li>
            <Button
              variant="outlined"
              style={{
                width: "fit-content",
                fontSize: "16px",
                fontWeight: "bold",
                background: "#0e5933",
                borderColor: "#0e5933",
                color: "white",
                borderRadius: "10px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <a href="tel:7196801538">Call (800) 000-0000</a>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
