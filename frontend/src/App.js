import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import EventsPage from "./components/EventsPage";
import StudentPage from "./components/StudentPage";
import AdminPage from "./components/AdminPage";
import CompanyPage from "./components/CompanyPage";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<EventsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/student" element={<StudentPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/company" element={<CompanyPage />} /> 
        </Routes>
    </Router>
  )
}

export default App;
