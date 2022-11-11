import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from './HOC/Layout';
import { AuthUser } from './pages/AuthUser';
import { ProviderContextWrapper } from './Context/ProviderContext';
import { PersonalArea } from './pages/PersonalArea';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderContextWrapper>
    <Router>
    <Layout>
      <Routes>

        <Route path="/" element={<App />}/>

        <Route path="/AuthUser" element={<AuthUser />}/>

        <Route path="/PersonalArea" element={<PersonalArea />}/>

      </Routes>
      </Layout>
    </Router>
    </ProviderContextWrapper>
  </React.StrictMode>
);