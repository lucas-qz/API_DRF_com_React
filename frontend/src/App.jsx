import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PasswordReset from './components/Auth/PasswordReset';
import PasswordResetConfirm from './components/Auth/PasswordResetConfirm';
import Home from './components/Home';

const App = () => {
    const isAuthenticated = !!localStorage.getItem('authToken');

  return (
    <Router>
      <Routes>
       <Route path="/login" element={!isAuthenticated ? <Login />  : <Navigate to="/home" />}  />
       <Route path="/"  element={!isAuthenticated ? <Register />  : <Navigate to="/home" />} />
       <Route path="/password-reset"  element={!isAuthenticated ? <PasswordReset /> : <Navigate to="/home" />}  />
       <Route path="/password-reset-confirm" element={!isAuthenticated ? <PasswordResetConfirm /> : <Navigate to="/home" />} />
       <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
       <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
