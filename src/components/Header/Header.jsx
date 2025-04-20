import React, { useEffect, useState } from "react";
import "./Header.css";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { SiParamountplus } from "react-icons/si";
import { FaChevronLeft } from "react-icons/fa";

function Header({ widthSideBar, setWidthSideBar }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      setTheme("dark");
    } else if (localStorage.getItem("theme") === "dark") {
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
      setTheme("light");
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }, []);

  const changeTheme = () => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      document.body.style.color = "#000";
      localStorage.setItem("theme", "light");
      setTheme("dark");
    } else {
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
      localStorage.setItem("theme", "dark");
      setTheme("light");
    }
  };

  return (
    <header
      className="header_nav"
      style={{ backgroundColor: theme === "light" ? "#444" : "blueviolet" }}
    >
      <section className="menu_search">
        {!widthSideBar ? (
          <IoMenu
            className="menu"
            size="35px"
            onClick={() => setWidthSideBar(!widthSideBar)}
            style={{ transition: "all .2s" }}
          />
        ) : (
          <FaChevronLeft
            onClick={() => setWidthSideBar(!widthSideBar)}
            style={{ transition: "all .2s" }}
          />
        )}

        <article className="search_bar">
          <input type="text" placeholder="Search..." />
          <CiSearch
            size="35px"
            color={`${theme === "light" ? "#777" : "#000"}`}
          />
        </article>
      </section>

      <section className="icons">
        <div className="theme">
          {theme === "light" ? (
            <FaMoon size="20px" onClick={changeTheme} title="Dark Mode" />
          ) : (
            <FaSun size="20px" onClick={changeTheme} title="Light Mode" />
          )}
        </div>
        <IoIosNotifications size="20px" />
        <SiParamountplus size="20px" />
        <FaUser size="20px" />
      </section>
    </header>
  );
}

export default Header;
