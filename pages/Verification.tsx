import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, Shield } from 'lucide-react';

const Verification: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <div className="mx-auto h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900">Professional Verification</h1>
            <p className="mt-2 text-lg text-slate-600">Get verified to unlock professional features and build trust.</p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-slate-50 p-4 border-b border-slate-200">
                <div className="flex items-center justify-between max-w-md mx-auto">
                    <div className={`flex flex-col items-center ${step >= 1 ? 'text-primary-600' : 'text-slate-400'}`}>
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-primary-600 bg-primary-50' : 'border-slate-300'}`}>1</div>
                        <span className="text-xs mt-1 font-medium">Basic Info</span>
                    </div>
                    <div className={`flex-1 h-1 mx-4 ${step >= 2 ? 'bg-primary-600' : 'bg-slate-200'}`}></div>
                    <div className={`flex flex-col items-center ${step >= 2 ? 'text-primary-600' : 'text-slate-400'}`}>
                         <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-primary-600 bg-primary-50' : 'border-slate-300'}`}>2</div>
                        <span className="text-xs mt-1 font-medium">Documents</span>
                    </div>
                    <div className={`flex-1 h-1 mx-4 ${step >= 3 ? 'bg-primary-600' : 'bg-slate-200'}`}></div>
                    <div className={`flex flex-col items-center ${step >= 3 ? 'text-primary-600' : 'text-slate-400'}`}>
                         <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-primary-600 bg-primary-50' : 'border-slate-300'}`}>3</div>
                        <span className="text-xs mt-1 font-medium">Review</span>
                    </div>
                </div>
            </div>

            <div className="p-8">
                {step === 1 && (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-900">Professional Details</h3>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Medical Registration Number</label>
                                <input type="text" className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" placeholder="MCI/State Council No." />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Specialization</label>
                                <select className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                                    <option>Cardiology</option>
                                    <option>Dermatology</option>
                                    <option>General Medicine</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700">Clinic/Hospital Address</label>
                                <textarea rows={3} className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></textarea>
                            </div>
                        </div>
                        <div className="flex justify-end pt-6">
                            <button onClick={() => setStep(2)} className="bg-primary-600 text-white px-6 py-2 rounded-md font-medium hover:bg-primary-700">Next Step</button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-900">Document Upload</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex justify-center items-center flex-col bg-slate-50 hover:bg-slate-100 transition">
                                <Upload className="h-10 w-10 text-slate-400 mb-2" />
                                <p className="text-sm font-medium text-slate-900">Upload Medical Degree (MBBS/MD)</p>
                                <p className="text-xs text-slate-500 mb-4">PDF or JPG up to 5MB</p>
                                <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"/>
                            </div>
                             <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex justify-center items-center flex-col bg-slate-50 hover:bg-slate-100 transition">
                                <FileText className="h-10 w-10 text-slate-400 mb-2" />
                                <p className="text-sm font-medium text-slate-900">Upload Registration Certificate</p>
                                <p className="text-xs text-slate-500 mb-4">MCI or State Council Certificate</p>
                                <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"/>
                            </div>
                        </div>
                        <div className="flex justify-between pt-6">
                             <button onClick={() => setStep(1)} className="text-slate-600 font-medium hover:text-slate-900">Back</button>
                            <button onClick={() => setStep(3)} className="bg-primary-600 text-white px-6 py-2 rounded-md font-medium hover:bg-primary-700">Review</button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="text-center py-12">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Verification Pending</h3>
                        <p className="text-slate-600 max-w-md mx-auto mb-8">
                            Thank you for submitting your documents. Our administrative team will verify your credentials within 24-48 hours. You will be notified via email/SMS.
                        </p>
                         <button className="bg-slate-100 text-slate-700 px-6 py-2 rounded-md font-medium hover:bg-slate-200">Go to Dashboard</button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
