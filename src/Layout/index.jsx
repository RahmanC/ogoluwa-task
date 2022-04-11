import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

// Importing Components and Styles
import Styles from "./index.module.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  const [handleHamburger, sethandleHamburger] = useState(false);

  // Responsiveness
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <section className={Styles.adminDashboardCont}>

      <div className={Styles.sidebarContOuter}>
        {isDesktopOrLaptop && <Sidebar active={Styles.active} />}{" "}
      </div>

      {!isDesktopOrLaptop && handleHamburger && (
        <nav
          className={Styles.sidebarMobileShadow}
          onClick={() => sethandleHamburger(true)}
        >
          <div className={Styles.sidebarContOuter}>
            <Sidebar active={Styles.active} />
          </div>
        </nav>
      )}

      <div className={Styles.mainContent}>
        <Navbar
          title="hello"
          handleHamburger={handleHamburger}
          sethandleHamburger={sethandleHamburger}
        />
        {/* Component Children */}

        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
