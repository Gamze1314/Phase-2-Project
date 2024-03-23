import React from "react";
import { Link, Routes, Route } from "react-router-dom";

function Notifications() {
  return <h3>Notifications Settings</h3>;
}

function Privacy() {
  return <h3>Privacy Settings</h3>;
}

function Account() {
  return <h3>Your Account Settings</h3>;
}

  const divStyle = {
    textAlign : "center",
    marginTop : "20px"
  };

const ulStyle = {
  listStyleType: "none", // Remove default bullet points
  padding: 0, // Remove default padding
  textAlign: "center",
  marginTop: "20px",
};

function Settings() {
  return (
    <div style={divStyle}>
      <h2>Settings</h2>
      <ul style={ulStyle}>
        <li>
          <Link to="/settings/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/settings/privacy">Privacy Settings</Link>
        </li>
        <li>
          <Link to="/settings/account">Your Account</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/settings/notifications" element={<Notifications />} />
        <Route path="/settings/privacy" element={<Privacy />} />
        <Route path="/settings/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default Settings;
