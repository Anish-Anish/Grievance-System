import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { db, auth } from "./Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function Navbar(props) {
  const authToken = localStorage.getItem("token");
  const [name, setName] = useState("");
  useEffect(() => {
    if (authToken) {
      auth.onAuthStateChanged((authUser) => {
        db.collection("SignedUpUsersData")
          .doc(authUser.uid)
          .get()
          .then((snapshot) => {
            localStorage.setItem("name", snapshot.data().Name);
            setName(snapshot.data().Name);
          });
      });
    }
  }, []);
  const value = props.page;
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    navigate("/");
  };
  return (
    <div>
      <nav>
        <div className="logo1"></div>
        <div className="navigation">
          <ul>
            <i id="menu-close" className="fas fa-times"></i>
            {value === "home" ? (
              <li style={{ backgroundColor: "purple", borderRadius: "5px" }}>
                <Link to={"/"} style={{ color: "white" }}>
                  Home
                </Link>
              </li>
            ) : (
              <li>
                <Link to={"/"}>Home</Link>
              </li>
            )}
            {value === "about" ? (
              <li style={{ backgroundColor: "purple", borderRadius: "5px" }}>
                <Link to={"/about"} style={{ color: "white" }}>
                  About
                </Link>
              </li>
            ) : (
              <li>
                <Link to={"/about"}>About</Link>
              </li>
            )}
            {authToken === null ? (
              <li></li>
            ) : (
              <li style={{ color: "purple", fontWeight: "bold" }}>
                {localStorage.getItem("name") || name}
                <FontAwesomeIcon icon={faUser} />
              </li>
            )}
            {authToken !== null ? (
              <li>
                <button onClick={handleLogOut} className="sign-out-button">
                  Sign Out
                </button>
              </li>
            ) : (
              <li>
                <button onClick={() => navigate("/login")}>Login/SignUp</button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
