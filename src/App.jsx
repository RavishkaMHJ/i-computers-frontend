import { Route, Routes } from "react-router-dom";
import HomePage from "./screens/home";
import AdminPage from "./screens/admin";
import LoginPage from "./screens/login";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="w-full h-screen bg-primary text-secondary">
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
