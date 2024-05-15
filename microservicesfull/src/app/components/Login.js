




import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Avatar, CssBaseline, Link } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";
import { useDispatch } from 'react-redux';


// import { setToken } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import ValidationTokenPage from "./ValidationTokenPage";
import { setToken } from "../slices/authSlice"; // Import the action creator
const API_URL = "http://localhost:9094/api/auth/";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  

  

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(API_URL + "token", {
        username,
        password,
      });
      if (response.status === 200 && response.data) {
        const token = response.data;
        console.log("Token:", token);
        console.log("Status Code:", response.status);
      console.log("Response Data:", response.data);
      console.log('Dispatching setToken action...');
        // dispatch(setToken(token)); // Use dispatch here
        dispatch({ type: 'auth/setToken', payload: token });

        console.log('Dispatched setToken action.');

        setToken(token);
        setRedirect(true);
        navigate("/validate"); // Redirect to ValidationTokenPage
      } else {
        throw new Error("Invalid response format");
      }
      console.log("Status Code:", response.status);
      console.log("Response Data:", response.data);
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred during login.");
      console.error("Error:", error);
    }
  };
  

  

  // if (redirect && token) {
  //   return <ValidationTokenPage token={token} />;
  // }

  return (
    <Grid container justifyContent="center">
      <CssBaseline />
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {error && (
            <Typography variant="body2" color="error" align="center" gutterBottom>
              {error}
            </Typography>
          )}
        </div>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleLogin}
        >
          Sign In
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/register" variant="body2">
              Don't have an account? Sign up
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginForm;







// import React, { useState } from "react";
// import { TextField, Button, Grid, Typography, Avatar, CssBaseline, Link } from "@mui/material";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import axios from "axios";
// import { useDispatch } from 'react-redux';
// import { useNavigate } from "react-router-dom";
// import { setToken } from "../slices/authSlice";

// const API_URL = "http://localhost:9094/api/auth/";

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(API_URL + "token", {
//         username,
//         password,
//       });
//       if (response.status === 200 && response.data) {
//         const token = response.data;
//         dispatch(setToken(token));
//         navigate("/validate"); // Redirect to ValidationTokenPage
//       } else {
//         throw new Error("Invalid response format");
//       }
//     } catch (error) {
//       setError(error.response?.data?.message || "An error occurred during login.");
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <Grid container justifyContent="center">
//       <CssBaseline />
//       <Grid item xs={12} sm={8} md={6} lg={4}>
//         <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           {error && (
//             <Typography variant="body2" color="error" align="center" gutterBottom>
//               {error}
//             </Typography>
//           )}
//         </div>
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           id="username"
//           label="Username"
//           name="username"
//           autoComplete="username"
//           autoFocus
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           name="password"
//           label="Password"
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button
//           type="button"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2 }}
//           onClick={handleLogin}
//         >
//           Sign In
//         </Button>
//         <Grid container justifyContent="flex-end">
//           <Grid item>
//             <Link href="/register" variant="body2">
//               Don't have an account? Sign up
//             </Link>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default LoginForm;

