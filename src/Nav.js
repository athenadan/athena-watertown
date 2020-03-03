import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import InternationalizationContext from "./InternationalizationContext";

const activeStyle = {
  color: "#614476"
};

function Nav() {
  const { language, setLanguage } = useContext(InternationalizationContext);
  return (
    <nav>
      <NavLink activeStyle={activeStyle} to="/" exact>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={activeStyle} to="/users">
        Users
      </NavLink>
      <button
        onClick={() => {
          setLanguage(language === "English" ? "Espanol" : "English");
        }}
      >
        Switch to {language === "English" ? "Espanol" : "English"}
      </button>
      {language === "English" ? "Hiya cowboy." : "Hola amigo!"}
    </nav>
  );
}

export default Nav;
