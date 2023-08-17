import { Link } from "react-router-dom";
import TopSideNav from "./TopSideNav";
import "./SidenavBar.css";
import { useEffect, useState } from "react";

const SideNavBar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [shownButton, setShowButton] = useState("");
  const [toggleContent, setToggleContent] = useState(false);

  const SideNavBar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
    setShowButton("none");
    toggleHandler();
  };
  function closeButton() {
    setIsopen("false");
    setShowButton("");
  }
  function toggleHandler() {
    toggleContent === false ? setToggleContent(true) : setToggleContent(false);
     
  }

  return (
    <>
      <TopSideNav />
      <div className= "container-fluid mt-3"  >
        <nav className="main--side--nav">
          <div
            className="btn btn-primary"
            onClick={SideNavBar}
            style={{ display: shownButton }}
            
          >
            <i className="fa fa-bars "></i>
          </div>
        </nav>
        <div
          className={`sidebar ${isOpen == true ? "active" : ""} 
          `}
        >
          <div className="sd-header header  ">
            <p className="mb-1 header">Employee Dashboard</p>
            <div className="btn btn-primary" onClick={closeButton}>
              <i className="fa fa-times cross--mark"></i>
            </div>
          </div>

          <div className="sd-body">
            <ul className="sidebar-menu">
              <li className="menu-header client-data active">
                <Link className="nav-link " to={"/Home"}>
                  Home
                </Link>
                <Link className="nav-link " to={"/Customers"}>
                  Customers
                </Link>

                <li>
                  <Link className="nav-link" to={"/Chats"}>
                    Chats
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={"/Gallery"}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={"/Invoice"}>
                    Invoices
                  </Link>
                </li>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={SideNavBar}
        ></div>
      </div>
    </>
  );
};

export default SideNavBar;
