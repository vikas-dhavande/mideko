import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AIChatWidget from './components/AIChatWidget';
import Home from './pages/Home';
import DoctorDashboard from './pages/Dashboard/DoctorDashboard';
import Marketplace from './pages/Shop/Marketplace';
import Verification from './pages/Verification';
import { MOCK_USER } from './constants';
import type { User } from './types';

function App() {
  const [user, setUser] = useState<User | null>(null);

  // Simulating an auth check on mount
  useEffect(() => {
    // In a real app, check token in localStorage
    // For demo purposes, we'll set the mock user after a brief delay or leave null
    // To test "Logged Out" state, comment the line below.
    setUser(MOCK_USER); 
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar user={user} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Marketplace />} />
            <Route path="/verification" element={<Verification />} />
            <Route 
              path="/dashboard" 
              element={user ? <DoctorDashboard user={user} /> : <Navigate to="/" replace />} 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">MediConnect</h3>
                <p className="text-slate-400 text-sm">
                  Building India's most trusted verified medical ecosystem. Connect with doctors, buy medicines, and stay healthy.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>Find a Doctor</li>
                  <li>Online Pharmacy</li>
                  <li>Lab Tests</li>
                  <li>Health Articles</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Compliance</li>
                  <li>Disclaimers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>support@mediconnect.in</li>
                  <li>+91 98765 43210</li>
                  <li>Mumbai, India</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
              &copy; 2023 MediConnect India. All rights reserved.
            </div>
          </div>
        </footer>
        
        {/* Global AI Assistant */}
        <AIChatWidget />
      </div>
    </Router>
  );
}

export default App;