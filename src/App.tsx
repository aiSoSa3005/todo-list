// src/App.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import '@fontsource/inter/400.css'; 

const App: React.FC = () => {
  return <Navigate to="/dashboard" replace />;
};

export default App;