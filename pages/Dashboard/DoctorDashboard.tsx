import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calendar, Users, DollarSign, Clock, Settings, User as UserIcon, ShieldCheck } from 'lucide-react';
import type { User } from '../../types';

const data = [
  { name: 'Mon', patients: 12, revenue: 6000 },
  { name: 'Tue', patients: 19, revenue: 9500 },
  { name: 'Wed', patients: 15, revenue: 7500 },
  { name: 'Thu', patients: 22, revenue: 11000 },
  { name: 'Fri', patients: 18, revenue: 9000 },
  { name: 'Sat', patients: 25, revenue: 12500 },
  { name: 'Sun', patients: 10, revenue: 5000 },
];

interface Props {
    user: User;
}

const DoctorDashboard: React.FC<Props> = ({ user }) => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <div className="flex items-center mt-1">
                <p className="text-slate-500">Welcome back, {user.name}</p>
                {user.isVerified && (
                    <span title="Verified Professional" className="flex items-center">
                        <ShieldCheck className="ml-2 h-5 w-5 text-blue-500" fill="currentColor" stroke="white" />
                    </span>
                )}
            </div>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-300 px-4 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Settings className="h-4 w-4" /> Settings
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-500">Total Appointments</p>
                    <p className="text-2xl font-bold text-slate-900">1,245</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    <Calendar className="h-6 w-6" />
                </div>
            </div>
            <span className="text-green-600 text-xs font-medium mt-2 inline-block">+12% from last month</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-500">New Patients</p>
                    <p className="text-2xl font-bold text-slate-900">45</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                    <Users className="h-6 w-6" />
                </div>
            </div>
             <span className="text-green-600 text-xs font-medium mt-2 inline-block">+5% from last month</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-500">Revenue (INR)</p>
                    <p className="text-2xl font-bold text-slate-900">₹84,500</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg text-green-600">
                    <DollarSign className="h-6 w-6" />
                </div>
            </div>
             <span className="text-green-600 text-xs font-medium mt-2 inline-block">+18% from last month</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-500">Pending Requests</p>
                    <p className="text-2xl font-bold text-slate-900">8</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                    <Clock className="h-6 w-6" />
                </div>
            </div>
            <span className="text-slate-400 text-xs font-medium mt-2 inline-block">Requires action</span>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Weekly Appointments</h3>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                        />
                        <Bar dataKey="patients" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Revenue Analytics</h3>
             <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip 
                             contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>

      {/* Recent Appointments Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">Upcoming Appointments</h3>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Patient</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date & Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                    {[1, 2, 3].map((i) => (
                        <tr key={i}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                                        <UserIcon className="h-5 w-5" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-slate-900">Rahul Sharma</div>
                                        <div className="text-sm text-slate-500">rahul@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-slate-900">Oct 24, 2023</div>
                                <div className="text-sm text-slate-500">10:30 AM</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                    General Checkup
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Confirmed
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-primary-600 hover:text-primary-900 mr-3">Reschedule</button>
                                <button className="text-red-600 hover:text-red-900">Cancel</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;