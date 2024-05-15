// import React from "react";
// import { Button } from "@mui/material";
// import axios from "axios";


// const ValidationTokenPage = ({ token }) => {
//   const handleValidateToken = async () => {
//     try {
//       await axios.get(`http://localhost:9094/api/auth/validate?token=${token}`);
//       alert("Token is valid");
//     } catch (error) {
//       console.error("Error validating token:", error);
//       alert("Error validating token");
//     }
//   };

//   return (
//     <div>
//       <h1>Validation Token Page</h1>
//       <Button variant="contained" onClick={handleValidateToken}>
//         Validate Token
//       </Button>
//     </div>
//   );
// };

// export default ValidationTokenPage;









import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import {BrowserRouter as Router,Routes, Route,Link} from "react-router-dom";

const ValidationTokenPage = () => {
  // Get token from Redux store
  const token = useSelector((state) => state.auth.token);
  console.log("token in validate :---"+token)
  const handleValidateToken = async () => {
    try {
      await axios.get(`http://localhost:9094/api/auth/validate?token=${token}`);
      alert("Token is valid");
    } catch (error) {
      console.error("Error validating token:", error);
      alert("Error validating token");
    }
  };

  return (
    <div>
      <h1>Validation Token Page</h1>
      <Button variant="contained" onClick={handleValidateToken}>
        Validate Token
      </Button>

              <li className="nav-item">
                 <Link to={"/validate/user"} className="nav-link">
                   User
                 </Link>
               </li>

               <li className="nav-item">
                 <Link to={"/order"} className="nav-link">
                   order
                 </Link>
               </li>
               <li className="nav-item">
                 <Link to={"/product"} className="nav-link">
                   product
                 </Link>
               </li>

               
               <li className="nav-item">
                 <Link to={"/login/shorturl"} className="nav-link">
                   genrate short url
                 </Link>
               </li>


    </div>
  );
};

export default ValidationTokenPage;
