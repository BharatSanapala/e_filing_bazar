// import { Link } from "react-router-dom";
// import "./TopSideNav.css";
// import LogOut from "./LogOut.js/LogOut";

// export default function TopSideNav() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg main-navbar main-navbar">
//         <form className="form-inline mr-auto">
//           <ul className="navbar-nav mr-3">
//             <li>
//               <a
//                 href="#"
//                 data-toggle="search"
//                 className="nav-link nav-link-lg d-sm-none"
//               ></a>
//             </li>
//           </ul>

//           <ul className="navbar-nav mr-3"></ul>
//         </form>
//         <ul className="navbar-nav navbar-right">
//           <li className=" dropdown-list-toggle">
//             <Link
//               href="#"
//               data-toggle="dropdown"
//               className="nav-link nav-link-lg message-toggle beep"
//             >
//               <i className="far fa-envelope" />
//             </Link>
//             <div className="dropdown-menu dropdown-list dropdown-menu-right">
//               <div className="dropdown-header">
//                 Messages
//                 <div className="float-right">
//                   <a href="#">Mark All As Read</a>
//                 </div>
//               </div>
//               <div className="dropdown-list-content dropdown-list-message">
//                 <a href="#" className="dropdown-item dropdown-item-unread">
//                   <div className="dropdown-item-avatar">
//                     <img
//                       alt="image"
//                       src="assets/img/avatar/avatar-1.png"
//                       className="rounded-circle"
//                     />
//                     <div className="is-online" />
//                   </div>
//                   <div className="dropdown-item-desc">
//                     <b>Customer - 1 </b>
//                     <p>
//                       Hello, can you let me know the status of my tax-return .
//                     </p>
//                     <div className="time">10 Hours Ago</div>
//                   </div>
//                 </a>
//                 <a href="#" className="dropdown-item dropdown-item-unread">
//                   <div className="dropdown-item-avatar">
//                     <img
//                       alt="image"
//                       src="assets/img/avatar/avatar-2.png"
//                       className="rounded-circle"
//                     />
//                   </div>
//                   <div className="dropdown-item-desc">
//                     <b>Customer - 2 </b>
//                     <p>what are the required documents ?</p>
//                     <div className="time">12 Hours Ago</div>
//                   </div>
//                 </a>
//                 <a href="#" className="dropdown-item dropdown-item-unread">
//                   <div className="dropdown-item-avatar">
//                     <img
//                       alt="image"
//                       src="assets/img/avatar/avatar-3.png"
//                       className="rounded-circle"
//                     />
//                     <div className="is-online" />
//                   </div>
//                   <div className="dropdown-item-desc">
//                     <b>Customer - 3</b>
//                     <p>when is the last date for e-filing ? </p>
//                     <div className="time">12 Hours Ago</div>
//                   </div>
//                 </a>
//                 <a href="#" className="dropdown-item">
//                   <div className="dropdown-item-avatar">
//                     <img
//                       src="assets/img/avatar/avatar-4.png"
//                       className="rounded-circle"
//                     />
//                   </div>
//                 </a>
//               </div>
//               <div className="dropdown-footer text-center">
//                 <a href="#">
//                   View All <i className="fas fa-chevron-right" />
//                 </a>
//               </div>
//             </div>
//           </li>
//           <li className="dropdown dropdown-list-toggle">
//             <a
//               href="#"
//               data-toggle="dropdown"
//               className="nav-link notification-toggle nav-link-lg beep"
//             >
//               <i className="far fa-bell" />
//             </a>
//             <div className="dropdown-menu dropdown-list dropdown-menu-right">
//               <div className="dropdown-header">
//                 Notifications
//                 <div className="float-right">
//                   <a href="#">Mark All As Read</a>
//                 </div>
//               </div>
//               <div className="dropdown-list-content dropdown-list-icons">
//                 <a href="#" className="dropdown-item dropdown-item-unread">
//                   <div className="dropdown-item-icon bg-primary text-white">
//                     <i className="fas fa-code" />
//                   </div>
//                   <div className="dropdown-item-desc">
//                     New client request !
//                     <div className="time text-primary">2 Min Ago</div>
//                   </div>
//                 </a>
//               </div>
//               <div className="dropdown-footer text-center">
//                 <a href="#">
//                   View All <i className="fas fa-chevron-right" />
//                 </a>
//               </div>
//             </div>
//           </li>
//           <li className="dropdown">
//             <a
//               href="#"
//               data-toggle="dropdown"
//               className="nav-link dropdown-toggle nav-link-lg nav-link-user"
//             >
//               <img
//                 alt="image"
//                 src="assets/img/avatar/avatar-1.png"
//                 className="rounded-circle mr-1"
//               />
//               <div className="d-sm-none d-lg-inline-block">
//                 Hi, Path breaker tech
//               </div>
//             </a>
//             <div className="dropdown-menu dropdown-menu-right">
//               <div className="dropdown-title">Logged in 5 min ago</div>
//               <Link to={"/EmployeeProfile"} className="dropdown-item has-icon">
//                 <i className="far fa-user" /> Profile
//               </Link>

//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item has-icon text-danger">
//                 <i className="fas fa-sign-out-alt" /> Logout
//               </a>
//             </div>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }
