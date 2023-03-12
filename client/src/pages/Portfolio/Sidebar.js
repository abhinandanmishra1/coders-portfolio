import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoIosBrush, IoMdContact } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import "./styles/sidebar.scss";

const Sidebar = () => {
  return (
      <div className="sidebar-container">
        <ul className="sidebar">
          <li className="">
            <a href="#about">
              <span className="sidebar__icon">
                <FaUserAlt />
              </span>
              <span className="sidebar__link">About</span>
            </a>
          </li>
          <li className="">
            <a href="#work">
              <span className="sidebar__icon">
                <IoIosBrush />
              </span>
              <span className="sidebar__link">Projects</span>
            </a>
          </li>
          <li>
            <a href="#blog">
              <span className="sidebar__icon">
                <IoCodeSlash />
              </span>
              <span className="sidebar__link">Coding</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="sidebar__icon">
                <IoMdContact />
              </span>
              <span className="sidebar__link">Contact</span>
            </a>
          </li>
        </ul>
      </div>
  );
};

export default Sidebar;
