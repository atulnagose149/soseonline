// import React, { useContext, useEffect, useState } from "react";
// import UserContext  from "../contexts/UserContext.js";
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Box,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { moduleCategories } from "../../utils/moduleCategories.js"; // Assuming this categorizes your modules
// import { navigateToModule } from "../../utils/navigateToModule.js"; // Function to handle navigation

// const importPriority = [
//   "Import - DSR",
//   "e-Sanchit",
//   "Documentation",
//   "Submission",
//   "Import - DO",
//   "Import - Operations",
// ];

// function AdminHome() {
//   const { user } = useContext(UserContext); // Get the user context
//   const [data, setData] = useState(null);
//   const [showModules, setShowModules] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch user data on component mount
//     async function fetchUserData() {
//       try {
//         const res = await axios.get(
//           `${process.env.REACT_APP_API_STRING}/get-user/${user.username}`
//         );
//         setData(res.data);
//       } catch (err) {
//         setError("Failed to fetch user data");
//       }
//     }
//     fetchUserData();
//   }, [user]);

//   // Function to categorize modules by their categories
//   const categorizedModules = data?.modules?.reduce((acc, module) => {
//     const category = moduleCategories[module] || "Uncategorized";
//     if (!acc[category]) acc[category] = [];
//     acc[category].push(module);
//     return acc;
//   }, {});

//   // Function to sort "Import" modules by priority
//   const sortImports = (modules) => {
//     return modules.sort((a, b) => {
//       const indexA = importPriority.indexOf(a);
//       const indexB = importPriority.indexOf(b);
//       return indexA - indexB;
//     });
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.reload();
//   };

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" align="center" gutterBottom>
//         Admin Dashboard
//       </Typography>

//       <Box display="flex" justifyContent="center" gap={2} sx={{ marginTop: 4 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => setShowModules(!showModules)}
//         >
//           {showModules ? "Hide Modules" : "Show Modules"}
//         </Button>
//         <Button variant="outlined" color="secondary" onClick={handleLogout}>
//           Logout
//         </Button>
//       </Box>

//       {error && (
//         <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
//           {error}
//         </Typography>
//       )}

//       {showModules && (
//         <>
//           {categorizedModules &&
//             Object.keys(categorizedModules)
//               .sort()
//               .map((category, idx) => (
//                 <div key={idx}>
//                   <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
//                     <strong>{category}</strong>
//                   </Typography>
//                   <hr style={{ margin: "5px 0" }} />
//                   <Grid container spacing={4}>
//                     {(category === "Import"
//                       ? sortImports(categorizedModules[category])
//                       : categorizedModules[category].sort()
//                     ).map((module, id) => (
//                       <Grid item xs={12} sm={6} md={4} key={id}>
//                         <Card
//                           onClick={() => navigateToModule(module, navigate)}
//                           variant="outlined"
//                           sx={{ cursor: "pointer" }}
//                         >
//                           <CardContent>
//                             <Typography variant="body1">{module}</Typography>
//                           </CardContent>
//                         </Card>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </div>
//               ))}
//         </>
//       )}
//     </Container>
//   );
// }

// export default AdminHome;

import React from "react";

const AdminHome = () => {
  return <div>AdminHome</div>;
};

export default AdminHome;
