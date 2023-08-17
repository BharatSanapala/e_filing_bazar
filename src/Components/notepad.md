import { Link } from "react-router-dom";
import TopSideNav from "./TopSideNav";
import "./SidenavBar.css";

export default function SideNavBar() {
  return (
    <div id='app'>
      <TopSideNav />
      <div className="main-sidebar sidebar-style-2 ">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <Link to={""}>Employee Dashboard</Link>
          </div>

          <ul className="sidebar-menu">
            <li
              className="menu-header client-data active"
              style={{ color: "#2c3e50" }}
            >
              <li>
                <Link className="nav-link " to={"/Customers"}>
                  Customers
                </Link>
              </li>
              <li className="">
                <Link className="nav-link" to={"/Chats"}>
                  Chats
                </Link>
              </li>
              <li className="">
                <Link to={"/Gallery"}>Gallery</Link>
              </li>
              <li className="">
                <Link className="nav-link" to={"/Invoice"}>
                  Invoices
                </Link>
              </li>
            </li>
          </ul>
        </aside>
      </div>
      <div className="navbar-bg" />
    </div>
  );
}


.main-sidebar .sidebar-menu li.active a {
  color: #4e4376;
  font-weight: 600;
}
.main-sidebar .sidebar-menu li.active a:hover {
  border-radius: 1px;
  background-color: #4e4376;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 18px;
  padding: 10px;
  width: 200px;
  transition: all 0.3s;
  cursor: pointer;
  margin: 5px;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.7);
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

}

a::after {
  position: absolute;
  opacity: 1;
  top: 9px;
  right: -9px;
  transition: 0.2s;
}

a:hover {
  padding-right: 1px;
  padding-left: 1px;
}

a:hover:after {
  opacity: 1;
  overflow: hidden;
}
.sidebar-brand{
  background-color: #79848f;
  color: #79848f;
}
.menu header{
  text-shadow: 3px 4px 7px rgba(81,67,21,0.8);
}


body.sidebar-mini .main-sidebar {
  width: 0px;
  margin: 0;
  overflow: initial !important;
  position: absolute;
  box-shadow: none;
  display: none;
}




//

body {
  background-color: #e0e3e8;
  font-family: "Rubik", sans-serif;
}
.header {
  font-weight: 700;
  background-color: #2c3e50;
}
.text-primary {
  color: #5a8dee !important;
}
.btn-primary {
  border-color: #5a8dee !important;
  background-color: #5a8dee !important;
  color: #fff;
}
.shadow-md {
  box-shadow: 0px 5px 10px rgba(90, 116, 148, 0.3);
}
.navbar {
  border-radius: 5px;
  left: 30px;
}
.sidebar {
  width: 280px;
  min-height: 100vh;
  box-shadow: 0px 4px 8px rgb(0 0 0 / 16%);
  background-color: #fff;
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 7;
  transition: 0.5s;
}
.sidebar.active {
  left: 0;
  
}
.sd-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
}
.sidebar-overlay.active {
  opacity: 1;
  visibility: hidden;
}
.sd-body {
  padding: 15px;
  max-height: calc(100vh - 67px);
  overflow-x: hidden;
}
.sd-body ul {
  display: inline-block;
  width: 100%;
  margin-bottom: 0;
  padding: 0;
}
.sd-body ul li {
  list-style: none;
  margin-bottom: 8px;
}
.sd-body ul li .sd-link {
  display: inline-block;
  width: 100%;
  padding: 10px 16px;
  color: #475f7b;
  background-color: #e5e8ec;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
}
