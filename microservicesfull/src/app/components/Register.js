// import React, { useState, useRef } from "react";
// import axios from "axios";
// import CryptoJS from "crypto-js";
// import { isEmail } from "validator";

// const API_URL = "http://localhost:9094/api/auth/";

// const required = (value) => {
//   if (!value) {
//     return <div className="invalid-feedback d-block">This field is required!</div>;
//   }
// };

// const validEmail = (value) => {
//   if (!isEmail(value)) {
//     return <div className="invalid-feedback d-block">This is not a valid email.</div>;
//   }
// };

// const vusername = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="invalid-feedback d-block">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };

// const vpassword = (value) => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="invalid-feedback d-block">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };

// const Register = () => {
//   const form = useRef();
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [successful, setSuccessful] = useState(false);
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleRegister = (e) => {
//     e.preventDefault();

//     setMessage("");
//     setSuccessful(false);
//     setLoading(true);

//     const encryptedUserName = CryptoJS.AES.encrypt(username, 'rrhysrg54e75sy6y').toString();
//     const encryptedPassword = CryptoJS.AES.encrypt(password, 'rrhysrg54e75sy6y').toString();

//     axios.post(API_URL + "register", {
//       name:encryptedUserName,
//       email:email,
//       password:encryptedPassword,
//     }).then(
//       (response) => {
//         setMessage(response.data.message);
//         setSuccessful(true);
//       },
//       (error) => {
//         const resMessage =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();

//         setMessage(resMessage);
//         setSuccessful(false);
//       }
//     ).finally(() => {
//       setLoading(false);
//     });
//   };

//   return (
//     <div className="col-md-12">
//       <div className="card card-container">
//         <form onSubmit={handleRegister} ref={form}>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               className="form-control"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               validations={[required, vusername]}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="text"
//               className="form-control"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               validations={[required, validEmail]}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               validations={[required, vpassword]}
//             />
//           </div>

//           <div className="form-group">
//             <button className="btn btn-primary btn-block" disabled={loading}>
//               {loading && (
//                 <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//               )}
//               <span>Sign Up</span>
//             </button>
//           </div>

//           {message && (
//             <div className="form-group">
//               <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
//                 {message}
//               </div>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;




// import React, { useState } from "react";
// import { TextField, Button, Grid, Typography, Avatar, CssBaseline, Link } from "@mui/material";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { toast } from "react-toastify"; // Import toast
// import "react-toastify/dist/ReactToastify.css"; // Import toast styles

// import axios from "axios";

// const API_URL = "http://localhost:9094/api/auth/";

// const RegisterForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post(API_URL + "register", {
//         name,
//         email,
//         password,
//       });
//       console.log("Registration successful:", response.data);
//       toast.success("Registration successful!");
//       // Add any additional logic here after successful registration
//     } catch (error) {
//       setError(error.response.data.message || "An error occurred during registration.");
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
//             Sign up
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
//           id="name"
//           label="Name"
//           name="name"
//           autoComplete="name"
//           autoFocus
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           id="email"
//           label="Email Address"
//           name="email"
//           autoComplete="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           name="password"
//           label="Password"
//           type="password"
//           id="password"
//           autoComplete="new-password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button
//           type="button"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2 }}
//           onClick={handleRegister}
//         >
//           Sign Up
//         </Button>
//         <Grid container justifyContent="flex-end">
//           <Grid item>
//             <Link href="/login" variant="body2">
//               Already have an account? Sign in
//             </Link>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default RegisterForm;









import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Avatar, CssBaseline, Link } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = "http://localhost:9094/api/auth/";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      const response = await axios.post(API_URL + "register", {
        name,
        email,
        password,
      });
      console.log("Registration successful:", response.data);
      // Show toast message after successful registration
      toast.success('Registration successful!');

      // Add any additional logic here after successful registration
    } catch (error) {
      setError(error.response.data.message || "An error occurred during registration.");
    }
  };

  return (
    <Grid container justifyContent="center">
      <CssBaseline />
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
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
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleRegister}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Grid>
      {/* Toast container */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
    </Grid>
  );
};

export default RegisterForm;
