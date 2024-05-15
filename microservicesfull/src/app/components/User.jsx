// User.js
import React,{useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const User = () => {


    const [userId, setUserId] = useState("");
    const [productDetails, setProductDetails] = useState(null);
    const token = useSelector((state) => state.auth.token);
  
    const handleGetProductDetailsForUser = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(`http://localhost:9094/api/users/${userId}/product`, config);
        setProductDetails(response.data);
      } catch (error) {
        console.error("Error getting product details:", error);
      }
    };
  

  return (
    <div>
    <h1>User Page</h1>
    <TextField
      label="Enter User ID"
      variant="outlined"
      value={userId}
      onChange={(e) => setUserId(e.target.value)}
      style={{ marginRight: "10px" }}
    />
      <Button variant="contained" onClick={handleGetProductDetailsForUser}>
        Get Product Details for User
      </Button>

      <div>
        {productDetails && (
          <div>
            <h2>Product Details</h2>
            <p>{JSON.stringify(productDetails)}</p>
          </div>
        )}
      </div>

      <Button variant="contained" component={Link} to="/getUserDetailsWithProduct">
        Get User Details with Product
      </Button>
      <Button variant="contained" component={Link} to="/getOrderDetailsForUser">
        Get Order Details for User
      </Button>
      <Button variant="contained" component={Link} to="/getUserDetailsWithOrder">
        Get User Details with Order
      </Button>
      <Button variant="contained" component={Link} to="/getAllUsers">
        Get All Users
      </Button>
      <Button variant="contained" component={Link} to="/getUserById">
        Get User by ID
      </Button>
      <Button variant="contained" component={Link} to="/updateUser">
        Update User
      </Button>
      <Button variant="contained" component={Link} to="/deleteUser">
        Delete User
      </Button>
    </div>
  );
};

export default User;
