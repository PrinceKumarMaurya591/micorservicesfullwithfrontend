// import React, { useState, useContext, useEffect } from "react"; 
// import CryptoJS from "crypto-js"; 
// import axios from "axios"; 
// import { useNavigate } from "react-router-dom"; 
// import "./Login.css"; 
// import "react-toastify/dist/ReactToastify.css"; 
// import { toast, ToastContainer } from "react-toastify"; 
// import { AuthContext } from "./AuthProvider"; 
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
// // import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; 

// function LoginPage() { 
//     const navigate = useNavigate(); 
//     const [userAuId, setUserAuId] = useState(""); 
//     const [password, setPassword] = useState(""); 
//     const [showPassword, setShowPassword] = useState(false); 
//     const [nonNumericErrorShown, setNonNumericErrorShown] = useState(false); 
//     const authContext = useContext(AuthContext); 
//     const apiUrl = process.env.REACT_APP_API_URL; 

//     const getTimeOfDay = () => { 
//         const currentHour = new Date().getHours(); 
//         if (currentHour >= 5 && currentHour < 12) { 
//             return "Good morning"; 
//         } else if (currentHour >= 12 && currentHour < 18) { 
//             return "Good afternoon"; 
//         } else { 
//             return "Good evening"; 
//         } 
//     }; 

//     const togglePasswordVisibility = () => { 
//         setShowPassword(!showPassword); 
//     }; 

//     const isPasswordEmpty = password.trim() === ""; 

//     const handleUserAuIdChange = (e) => { 
//         const inputText = e.target.value; 
//         if (/[^0-9]/.test(inputText) && !nonNumericErrorShown) { 
//             toast.error("Only numeric characters are allowed in Au Id", { 
//                 position: "bottom-center", 
//             }); 
//             setNonNumericErrorShown(true); 
//         } else { 
//             const numericValue = inputText.replace(/\D/g, ""); 
//             setUserAuId(numericValue); 
//         } 
//     }; 

//     const handleLogin = async () => { 
//         if (!userAuId || !password) { 
//             toast.error("Please enter both Employee ID and Password", { 
//                 position: "bottom-center", 
//             }); 
//             return; 
//         } 
//         const secretKey = "APuZKpRBPv8aEenc"; 
//         const encryptedPassword = encryptPassword(password, secretKey); 
//         const encodedUserAuId = encodeURIComponent(userAuId); 
//         try { 
//             // Send a POST request to validate the user 
//             const response = await axios.post( 
//                 `${apiUrl}/credpro/checkuseroradmin/validUser`, 
//                 { 
//                     userAuId: encodedUserAuId, 
//                     password: encryptedPassword, 
//                 } 
//             ); 
//             console.log("Response Data:", response.data); // Log the response data 
//             const { role, username, sessionToken,isAdminModuleEnable } = response.data; // Ensure you are getting the sessionToken 
//             // Store userAuId in local storage and add to the array 
//             const storedUserIds = JSON.parse(localStorage.getItem("userIds")) || []; 
//             if (!storedUserIds.includes(userAuId)) { 
//                 storedUserIds.push(userAuId); 
//                 localStorage.setItem("userIds", JSON.stringify(storedUserIds)); 
//             } 
//             if (role === "RegularUser" ) { 
//                 const encodedUserId = btoa(userAuId); 
//                 const isAdminModuleEnabled = isAdminModuleEnable === 'false'; // Convert string to boolean 
//                 const userDashboardPath = isAdminModuleEnabled ? `/user/${encodedUserId}/dashboard` : `/user/${encodedUserId}`; 
//                 navigate(userDashboardPath); 
//                 const greeting = getTimeOfDay(); 
//                 toast.success(`${greeting}, ${username}!`, { 
//                     position: "bottom-center", 
//                 }); 
//                 authContext.login(username, userAuId, sessionToken, role); // Pass the session token to the login function 
//             } else if (role === "Admin") { 
//                 const encodedAdminId = btoa(userAuId); 
//                 navigate(`/admin/${encodedAdminId}`); 
//                 const greeting = getTimeOfDay(); 
//                 toast.success(`${greeting}, ${username}!`, { 
//                     position: "bottom-center", 
//                     autoClose: 1000, 
//                 }); 
//                 authContext.login(username, userAuId, sessionToken, role); // Pass the session token to the login function 
//             } else { 
//                 toast.error("Invalid User AU ID or Password", { 
//                     position: "bottom-center", 
//                 }); 
//             } 
//         } catch (error) { 
//             if (error.response && error.response.status === 404) { 
//                 console.error(error); 
//                 console.log('Response:', error.response); // Log the response 
//                 toast.error('User is not active. Please contact the administrator.', { 
//                     autoClose: 1400, 
//                     position: "bottom-center", 
//                 }); 
//             } else if(error.response && error.response.status === 400) { 
//                 console.error(error); 
//                 console.log('Response:', error.response); // Log the response 
//                 toast.error('User already has an active session.', { 
//                     autoClose: 1400, 
//                     position: "bottom-center", 
//                 }); 
//             } else if (error.response && error.response.status === 401) { 
//                 toast.error("Invalid User AU ID or Password", { 
//                     position: "bottom-center", 
//                     autoClose: 1000, 
//                 }); 
//             } else { 
//                 console.error(error); 
//                 console.log('Response:', error.response); // Log the response 
//                 toast.error("Server did not respond. Please try again later.", { 
//                     position: "bottom-center", 
//                     autoClose: 1000, 
//                 }); 
//             } 
//         } 
//     }; 

//     const encryptPassword = (plainText, secretKey) => { 
//         const key = CryptoJS.enc.Utf8.parse(secretKey); 
//         const iv = CryptoJS.enc.Utf8.parse(secretKey); 
//         const encrypted = CryptoJS.AES.encrypt(plainText, key, { 
//             iv: iv, 
//             mode: CryptoJS.mode.CBC, 
//             padding: CryptoJS.pad.Pkcs7, 
//         }); 
//         return encrypted.toString(); 
//     }; 

//     return ( 
//         <div className="loginform"> 
//             <div className="login-container"> 
//                 <div className="login-card"> 
//                     <div className="mb-4"> 
//                         <input 
//                             className="form-control form-control-lg" 
//                             id="formControlLg" 
//                             type="email" 
//                             placeholder="Enter Au Id" 
//                             value={userAuId} 
//                             onChange={handleUserAuIdChange} 
//                         /> 
//                     </div> 
//                     <div className="mb-4 input-group"> 
//                         <input 
//                             className="form-control form-control-lg" 
//                             id="formControlLg" 
//                             type={showPassword ? "text" : "password"} 
//                             placeholder="Password" 
//                             value={password} 
//                             onChange={(e) => setPassword(e.target.value)} 
//                         /> 
//                         <div className="input-group-append"> 
//                             <button 
//                                 className={`password-toggle-button ${showPassword ? "show-password" : "hide-password"}`} 
//                                 onClick={togglePasswordVisibility} 
//                                 disabled={password === ""} 
//                             > 
//                                 {/* <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="eye-icon" />  */}
//                             </button> 
//                         </div> 
//                     </div> 
//                     <button 
//                         className="btn btn-dark btn-lg mb-4 px-5 custom-bg-color" 
//                         onClick={handleLogin} 
//                     > 
//                         Login 
//                     </button> 
//                 </div> 
//                 {/* <div className="image-container"> 
//                     <img src={`${process.env.PUBLIC_URL}/withinloginpage.png`} alt="Background Image" /> 
//                 </div>  */}
//             </div> 
//         </div> 
//     ); 
// } 

// export default LoginPage;
