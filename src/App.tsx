// src/App.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const App: React.FC = () => {
  return <Navigate to="/login" replace />;
};

export default App;