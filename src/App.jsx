import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import AboutPage from "./pages/AboutPage";
import SavedRoutesPage from "./pages/SavedRoutesPage";
import RoutePlannerPage from "./pages/RoutePlannerPage";
import ProfilePage from "./pages/ProfilePage";
import { useAuth } from "./context/AuthProvider";
import "./App.css";

function App() {
  const { token } = useAuth();

  return (
    <>
      <Routes>
        {token && <Route path="/home" element={<HomePage />} />}
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/"
          element={token ? <Navigate to="/home" /> : <SignInPage />}
        />
        <Route path="/about" element={<AboutPage />} />
        {token && <Route path="/savedroutes" element={<SavedRoutesPage />} />}
        <Route path="/routeplanner" element={<RoutePlannerPage />} />
        {token && <Route path="/profile" element={<ProfilePage />} />}
        <Route path="*" element={<Navigate to={token ? "/home" : "/"} />} />
      </Routes>
    </>
  );
}

export default App;
