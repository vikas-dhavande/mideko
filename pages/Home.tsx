import React from 'react';
import { Search, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DOCTORS, SPECIALTIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-700 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Medical Background"
          />
          <div className="absolute inset-0 bg-primary-700 mix-blend-multiply" />
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            India's Most Trusted <span className="text-primary-200">Verified</span> Medical Ecosystem
          </h1>
          <p className="mt-6 text-xl text-primary-100 max-w-3xl">
            Connect with top-rated doctors, book appointments instantly, and order genuine medical products. 
            Verified professionals, secure data, and AI-powered assistance.
          </p>
          
          {/* Search Box */}
          <div className="mt-10 w-full max-w-2xl">
            <div className="bg-white rounded-lg shadow-xl p-2 flex flex-col sm:flex-row gap-2">
              <div className="flex-grow relative">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-400" />
                 </div>
                 <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-transparent placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 sm:text-sm"
                    placeholder="Search doctors, clinics, specialties..."
                 />
              </div>
              <div className="sm:w-48 relative border-t sm:border-t-0 sm:border-l border-slate-200">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-slate-400" />
                 </div>
                 <input 
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-transparent placeholder-slate-500 focus:outline-none sm:text-sm"
                    placeholder="Location"
                    defaultValue="Mumbai"
                 />
              </div>
              <button className="bg-primary-600 text-white px-6 py-3 rounded-md font-bold hover:bg-primary-700 transition">
                Search
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="text-primary-200 text-sm mr-2">Popular:</span>
            {SPECIALTIES.slice(0, 4).map(spec => (
              <span key={spec} className="bg-primary-800/50 text-white px-3 py-1 rounded-full text-xs border border-primary-500 cursor-pointer hover:bg-primary-600">
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center p-6 bg-slate-50 rounded-xl hover:shadow-lg transition">
              <div className="mx-auto h-12 w-12 text-primary-600 flex items-center justify-center bg-primary-100 rounded-full mb-4">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-medium text-slate-900">100% Verified Doctors</h3>
              <p className="mt-2 text-base text-slate-500">Every medical professional on our platform undergoes a strict 3-step verification process.</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl hover:shadow-lg transition">
              <div className="mx-auto h-12 w-12 text-primary-600 flex items-center justify-center bg-primary-100 rounded-full mb-4">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-medium text-slate-900">Instant Booking</h3>
              <p className="mt-2 text-base text-slate-500">No waiting queues. Book appointments online and get instant confirmation via SMS/Email.</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl hover:shadow-lg transition">
              <div className="mx-auto h-12 w-12 text-primary-600 flex items-center justify-center bg-primary-100 rounded-full mb-4">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-medium text-slate-900">Find Nearby Hospitals</h3>
              <p className="mt-2 text-base text-slate-500">Locate the nearest verified clinics and hospitals with real-time availability status.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Doctors Section */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900">Top Rated Doctors</h2>
            <Link to="/doctors" className="text-primary-600 font-medium hover:text-primary-700">View all &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOCTORS.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 hover:shadow-md transition">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <img className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-sm" src={doctor.imageUrl} alt={doctor.name} />
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-1">
                          {doctor.name} 
                          {doctor.isVerified && <ShieldCheck className="h-4 w-4 text-primary-500" fill="currentColor" stroke="white" />}
                        </h3>
                        <p className="text-sm text-slate-500">{doctor.specialty}</p>
                        <p className="text-xs text-slate-400">{doctor.qualification}</p>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                      {doctor.rating} ★
                    </div>
                  </div>
                  <div className="mt-4 border-t border-slate-100 pt-4">
                     <div className="flex items-center text-sm text-slate-500 mb-2">
                        <MapPin className="h-4 w-4 mr-2" /> {doctor.location}
                     </div>
                     <div className="flex items-center text-sm text-slate-500">
                        <Clock className="h-4 w-4 mr-2" /> {doctor.experienceYears} Years Exp.
                     </div>
                  </div>
                  <div className="mt-6 flex gap-2">
                     <button className="flex-1 bg-primary-50 text-primary-700 py-2 rounded-lg text-sm font-medium hover:bg-primary-100">View Profile</button>
                     <button className="flex-1 bg-primary-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-primary-700">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
