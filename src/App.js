import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import CoursesPage from "./pages/CoursesPage";
import ConsultantsPage from "./pages/ConsultantsPage";
import FeedPage from "./pages/FeedPage";
import FeedDetailPage from "./pages/FeedDetailPage";
import AdminPage from "./pages/AdminPage";
import GiftCoursePage from "./pages/GiftCoursePage.js";
import RoadmapsPage from "./pages/RoadmapsPage";
import AffiliatePage from "./pages/AffiliatePage.js";
import CertificatesPage from "./pages/CertificatesPage.js";
import FeedbackPage from "./pages/FeedbackPage.js";
import BillingPage from "./pages/BillingPage.js";
import HelpPage from "./pages/HelpPage.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.7,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/consultants" element={<ConsultantsPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/feed/:id" element={<FeedDetailPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/gift-course" element={<GiftCoursePage />} />
          <Route path="/roadmaps" element={<RoadmapsPage />} />
          <Route path="/affiliate" element={<AffiliatePage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
