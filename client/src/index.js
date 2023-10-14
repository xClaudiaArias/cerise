import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import Login from './components/Login';
import { Admin } from 'react-admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './features/auth/AdminLogin';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App/>} />
        <Route path="/login" element={<Login setLoginCustomer="Hello"/>} />
        <Route path='/admin-login' element={<Admin loginPage={AdminLogin} authProvider={authProvider} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



