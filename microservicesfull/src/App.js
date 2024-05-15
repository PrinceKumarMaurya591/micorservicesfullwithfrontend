import {BrowserRouter as Router,Routes, Route,Link} from "react-router-dom";
import './App.css';
import LoginPage from "./app/components/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./app/components/Login";
import Register from "./app/components/Register";
import ValidationTokenPage from "./app/components/ValidationTokenPage";
import Navbar from "./app/components/Navbar";
import User from './app/components/User';
import GenerateShortUrl from "./app/components/GenerateShortUrl";

function App() {
  return (
    <>

    
    <Router>
    <Navbar/>
   


      <Routes>
      {/* <Route exact path="/" element={<LoginPage/>}/> */}
      <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/validate" element={<ValidationTokenPage />} />
            <Route path="/login/shorturl" element={<GenerateShortUrl />} />
            
            <Route path="/validate/user" element={<User />} /> {/* Add this route for the User component */}
        <Route path="/getProductDetailsForUser" element={<div>Get Product Details for User</div>} />
        <Route path="/getUserDetailsWithProduct" element={<div>Get User Details with Product</div>} />
        <Route path="/getOrderDetailsForUser" element={<div>Get Order Details for User</div>} />
        <Route path="/getUserDetailsWithOrder" element={<div>Get User Details with Order</div>} />
        <Route path="/getAllUsers" element={<div>Get All Users</div>} />
        <Route path="/getUserById" element={<div>Get User by ID</div>} />
        <Route path="/updateUser" element={<div>Update User</div>} />
        <Route path="/deleteUser" element={<div>Delete User</div>} />

      </Routes>
    </Router>


    </>
  );
}

export default App;









// import React, { useState, useEffect, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// import Login from "./app/components/Login";
// import Register from "./app/components/Register";
// import Home from "./app/components/Home";
// import Profile from "./app/components/Profile";
// import BoardUser from "./app/components/BoardUser";
// import BoardModerator from "./app/components/BoardModerator";
// import BoardAdmin from "./app/components/BoardAdmin";

// import { logout } from "./app/slices/auth";

// const App = () => {
//   const [showModeratorBoard, setShowModeratorBoard] = useState(false);
//   const [showAdminBoard, setShowAdminBoard] = useState(false);

//   const { user: currentUser } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const logOut = useCallback(() => {
//     dispatch(logout());
//   }, [dispatch]);

//   useEffect(() => {
//     if (currentUser) {
//       setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
//       setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
//     } else {
//       setShowModeratorBoard(false);
//       setShowAdminBoard(false);
//     }
//   }, [currentUser]);

//   return (
//     <Router>
//       <div>
//         <nav className="navbar navbar-expand navbar-dark bg-dark">
//           <Link to={"/"} className="navbar-brand">
//             bezKoder
//           </Link>
//           <div className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to={"/home"} className="nav-link">
//                 Home
//               </Link>
//             </li>

//             {showModeratorBoard && (
//               <li className="nav-item">
//                 <Link to={"/mod"} className="nav-link">
//                   Moderator Board
//                 </Link>
//               </li>
//             )}

//             {showAdminBoard && (
//               <li className="nav-item">
//                 <Link to={"/admin"} className="nav-link">
//                   Admin Board
//                 </Link>
//               </li>
//             )}

//             {currentUser && (
//               <li className="nav-item">
//                 <Link to={"/user"} className="nav-link">
//                   User
//                 </Link>
//               </li>
//             )}
//           </div>

//           {currentUser ? (
//             <div className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to={"/profile"} className="nav-link">
//                   {currentUser.username}
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <a href="/login" className="nav-link" onClick={logOut}>
//                   LogOut
//                 </a>
//               </li>
//             </div>
//           ) : (
//             <div className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to={"/login"} className="nav-link">
//                   Login
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link to={"/register"} className="nav-link">
//                   Sign Up
//                 </Link>
//               </li>
//             </div>
//           )}
//         </nav>

//         <div className="container mt-3">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/user" element={<BoardUser />} />
//             <Route path="/mod" element={<BoardModerator />} />
//             <Route path="/admin" element={<BoardAdmin />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
