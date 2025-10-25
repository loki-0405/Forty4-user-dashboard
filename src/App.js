import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import UserDetailsPage from './pages/UserDetailsPage';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/users/:id" element={<UserDetailsPage />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}
