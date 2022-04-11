import React from "react";

import { useMediaQuery } from "react-responsive";
import { RiArrowDownSLine, RiMenu2Line } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

// Importing Styles
import Styles from "./Navbar.module.css";

const Navbar = ({ handleHamburger, sethandleHamburger }) => {
  const isHamburger = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  return (
    <div className={Styles.navbarCont}>
      <div className={Styles.navbarContInner}>
        <div></div>
        <div className={Styles.navContentLeft}>
          <div className={Styles.profileCont}>
            <div className={Styles.navItems}>
              <svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7876 34.6612H35.1688"
                  stroke="#091E46"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.7485 27.9319C20.7485 24.2154 23.7613 21.2026 27.4778 21.2026V21.2026C31.1943 21.2026 34.2071 24.2154 34.2071 27.9319V34.6612H20.7485V27.9319Z"
                  stroke="#091E46"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.8126 34.6611V34.1611C25.6341 34.1611 25.4692 34.2563 25.3798 34.4108L25.8126 34.6611ZM29.1435 34.6611L29.5763 34.4108C29.487 34.2563 29.322 34.1611 29.1435 34.1611V34.6611ZM26.0554 35.6224C26.0554 35.3625 26.1247 35.1202 26.2454 34.9115L25.3798 34.4108C25.1734 34.7676 25.0554 35.182 25.0554 35.6224H26.0554ZM27.4781 37.0451C26.6924 37.0451 26.0554 36.4081 26.0554 35.6224H25.0554C25.0554 36.9604 26.1401 38.0451 27.4781 38.0451V37.0451ZM28.9007 35.6224C28.9007 36.4081 28.2638 37.0451 27.4781 37.0451V38.0451C28.8161 38.0451 29.9007 36.9604 29.9007 35.6224H28.9007ZM28.7107 34.9115C28.8315 35.1202 28.9007 35.3625 28.9007 35.6224H29.9007C29.9007 35.182 29.7828 34.7676 29.5763 34.4108L28.7107 34.9115ZM29.1435 34.1611H25.8126V35.1611H29.1435V34.1611Z"
                  fill="#091E46"
                />
                <circle cx="31.457" cy="21.3094" r="3.04421" fill="#FA5F1C" />
                <circle
                  cx="27.3979"
                  cy="27.3979"
                  r="26.8979"
                  stroke="#E9E9E9"
                />
              </svg>

              <div className={Styles.profile}></div>
              <p className={Styles.name}>
                Ogoluwa
                <RiArrowDownSLine className="ms-5 me-5" />
              </p>
            </div>

            <span
              className={Styles.navbarHamburger}
              onClick={() => sethandleHamburger(!handleHamburger)}
            >
              {isHamburger && !handleHamburger ? (
                <RiMenu2Line />
              ) : (
                isHamburger &&
                handleHamburger && (
                  <div>
                    <FaTimes />
                  </div>
                )
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
