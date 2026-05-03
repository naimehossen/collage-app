import React, { useState } from 'react';
import Button from '../components/common/Button';

const AdmissionPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Info (10 info)
    studentName: '',
    fatherName: '',
    motherName: '',
    gender: '',
    dob: '',
    bloodGroup: '',
    religion: '',
    nationality: '',
    mobile: '',
    email: '',

    // Step 2: Academic & Address (10 info)
    sscRoll: '',
    sscReg: '',
    sscBoard: '',
    sscYear: '',
    sscGpa: '',
    sscSchool: '',
    presentAddress: '',
    permanentAddress: '',
    guardianMobile: '',
    chosenTechnology: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("আপনার আবেদনটি সফলভাবে জমা হয়েছে!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            অনলাইন ভর্তি <span className="text-orange-500">২০২৬-২৭</span>
          </h1>
          <div className="flex justify-center items-center space-x-4">
             <div className={`h-2 w-24 rounded-full ${step >= 1 ? 'bg-orange-500' : 'bg-gray-600'}`}></div>
             <div className={`h-2 w-24 rounded-full ${step >= 2 ? 'bg-orange-500' : 'bg-gray-600'}`}></div>
          </div>
          <p className="text-gray-300 mt-4 font-medium">ধাপ: {step === 1 ? 'ব্যক্তিগত তথ্য' : 'একাডেমিক তথ্য'}</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-white/20">
          <form onSubmit={handleSubmit}>
            
            {/* Step 1: Personal Information (1-10) */}
            {step === 1 && (
              <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
                <h2 className="md:col-span-2 text-xl font-bold text-blue-900 border-b pb-2 mb-4">ব্যক্তিগত তথ্য (ধাপ ১)</h2>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">ছাত্র/ছাত্রীর নাম *</label>
                  <input type="text" name="studentName" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none" placeholder="পুরো নাম লিখুন" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">পিতার নাম *</label>
                  <input type="text" name="fatherName" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">মাতার নাম *</label>
                  <input type="text" name="motherName" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">লিঙ্গ *</label>
                  <select name="gender" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" required>
                    <option value="">নির্বাচন করুন</option>
                    <option value="Male">ছেলে</option>
                    <option value="Female">মেয়ে</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">জন্ম তারিখ *</label>
                  <input type="date" name="dob" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">রক্তের গ্রুপ</label>
                  <input type="text" name="bloodGroup" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" placeholder="উদা: A+" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">ধর্ম *</label>
                  <input type="text" name="religion" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">জাতীয়তা *</label>
                  <input type="text" name="nationality" defaultValue="Bangladeshi" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">মোবাইল নম্বর *</label>
                  <input type="tel" name="mobile" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" placeholder="017XXXXXXXX" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">ইমেইল (যদি থাকে)</label>
                  <input type="email" name="email" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" placeholder="example@mail.com" />
                </div>

                <div className="md:col-span-2 text-right mt-6">
                  <button type="button" onClick={nextStep} className="bg-orange-500 text-white px-10 py-3 rounded-xl font-bold shadow-lg hover:bg-orange-600 transition-all">
                    পরবর্তী ধাপ (Next) <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Academic & Address (11-20) */}
            {step === 2 && (
              <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
                <h2 className="md:col-span-2 text-xl font-bold text-blue-900 border-b pb-2 mb-4">একাডেমিক ও ঠিকানা (ধাপ ২)</h2>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">SSC রোল নম্বর *</label>
                  <input type="text" name="sscRoll" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">SSC রেজিস্ট্রেশন নম্বর *</label>
                  <input type="text" name="sscReg" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">বোর্ড *</label>
                  <input type="text" name="sscBoard" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" placeholder="উদা: ঢাকা" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">পাসের সন *</label>
                  <input type="text" name="sscYear" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">GPA *</label>
                  <input type="text" name="sscGpa" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" placeholder="0.00" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">স্কুলের নাম *</label>
                  <input type="text" name="sscSchool" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">বর্তমান ঠিকানা *</label>
                  <input type="text" name="presentAddress" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">স্থায়ী ঠিকানা *</label>
                  <input type="text" name="permanentAddress" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">অভিভাবকের মোবাইল নম্বর *</label>
                  <input type="tel" name="guardianMobile" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">কাঙ্ক্ষিত টেকনোলজি *</label>
                  <select name="chosenTechnology" onChange={handleInputChange} className="w-full p-3 rounded-xl border border-gray-200 outline-none" required>
                    <option value="">টেকনোলজি নির্বাচন করুন</option>
                    <option value="Computer">Computer</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Civil">Civil</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Textile">Textile</option>
                  </select>
                </div>

                <div className="md:col-span-2 flex justify-between mt-6">
                  <button type="button" onClick={prevStep} className="text-gray-500 font-bold hover:text-blue-900 transition-all">
                    <i className="fas fa-arrow-left mr-2"></i> আগের ধাপ
                  </button>
                  <button type="submit" className="bg-blue-900 text-white px-10 py-3 rounded-xl font-bold shadow-lg hover:bg-black transition-all">
                    আবেদন জমা দিন (Submit) <i className="fas fa-check-circle ml-2"></i>
                  </button>
                </div>
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;