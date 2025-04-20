import React from "react";
import { IoMdHome } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { TbUserScreen } from "react-icons/tb";
import { FaClipboardList } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { TbChartInfographic } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa6";
import { LiaMapSolid } from "react-icons/lia";
import "./Sidebar.css";
import imgAvatar from "../../imgs/296fe121-5dfa-43f4-98b5-db50019738a7.jpg";
import { NavLink } from "react-router-dom";

function Sidebar({ widthSideBar }) {

  const arraySidebar = [
    {
      icon: <IoMdHome />,
      text: "Dashbord",
      path: "/",
    },
    {
      icon: <HiUsers />,
      text: "Manage Team",
      path: "/team",
    },
    {
      icon: <TbUserScreen />,
      text: "Contact Information",
      path: "/contact",
    },
    {
      icon: <FaClipboardList />,
      text: "Invoices Balances",
      path: "/invoices",
    },
    {
      icon: <FaUser />,
      text: "Profile Team",
      path: "/create_user",
    },
    {
      icon: <FaCalendarAlt />,
      text: "Calendar",
      path: "/calendar",
    },
    {
      icon: <BsQuestionCircle />,
      text: "Faq Page",
      path: "/faq",
    },
    {
      icon: <MdOutlineStackedBarChart />,
      text: "Bar Chart",
      path: "/bar_chart",
    },
    {
      icon: <TbChartInfographic />,
      text: "Pie Chart",
      path: "/pie_chart",
    },
    {
      icon: <FaChartLine />,
      text: "line Chart",
      path: "/line_chart",
    },
    // {
    //   icon: <LiaMapSolid />,
    //   text: "Geography",
    //   path: "/geography",
    // },
  ];

  return (
    <section
      className="sidebar"
      style={{ width: widthSideBar ? "80%" : "100%", transition: "width .2s" }}
    >
      <article className="image">
        <img src={imgAvatar} alt="image avatar" />
        <div className="name_admin">
          <h4
            style={{
              fontSize: widthSideBar ? "0" : "16px",
              transition: "width .2s",
            }}
          >
            Touati Karim
          </h4>
          <p
            style={{
              fontSize: widthSideBar ? "0" : "16px",
              transition: "width .2s",
            }}
          >
            Admin
          </p>
        </div>
      </article>
      <ul className="icons_side">
        {arraySidebar.map(({ icon, text, path }) => (
          <NavLink className="icon_side" to={`${path}`} key={text}>
            {icon}
            <span
              style={{
                fontSize: widthSideBar ? "0" : "16px",
                transition: "width .2s",
              }}
            >
              {text}
            </span>
          </NavLink>
        ))}
      </ul>
    </section>
  );
}

export default Sidebar;
