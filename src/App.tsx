import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import AboutPage from "./pages/AboutPage";
import SavedRoutesPage from "./pages/SavedRoutesPage";
import RoutePlannerPage from "./pages/RoutePlannerPage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/savedroutes" element={<SavedRoutesPage />} />
        <Route path="/routeplanner" element={<RoutePlannerPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
