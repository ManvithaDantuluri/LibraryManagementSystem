import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react"; // Icon

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ✅ Clear token and user info from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");

    navigate("/");
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "1rem",
        right: "1rem",
        cursor: "pointer",
        zIndex: 1000,
      }}
      onClick={handleLogout}
      title="Logout"
    >
      <LogOut color="#fff" size={24} />
    </div>
  );
};

export default LogoutButton;
