import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="Nav-Container">
      <div className="Nav-left">
        <button className="logo-s">S</button>
        <p className="smile"> Smile </p>
        <p className="nattakit"> Nattakit </p>
      </div>
      <div className="Nav-right">
        <p
          className="menu"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <p
          className="menu"
          onClick={() => {
            navigate("/Experience");
          }}
        >
          Experience & Education
        </p>
      </div>
    </div>
  );
}

export default Navbar;
