import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/login/Login.tsx';
import '@fontsource/inter/400.css'; 
import Signup from './components/pages/register/Signup.tsx';
import Dashboard from './components/pages/dashboard/Dashboard.tsx';
import ListPage from './components/pages/listpage/ListPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/listpage' element={<ListPage/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  </StrictMode>,
)
