import React from 'react';
import { X, Activity } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
// import { closeAuthModal, setAuthModalView } from '../features/ui/uiSlice'; 
// Path theek kar lena

import { setAuthModalView, clearAuthModal } from '../../Redux/Features/ui/uiSlice';

const AuthModal = () => {
  const dispatch = useDispatch();
  // 1. Redux se Modal ki state aur View padho
  const { isAuthModalOpen, authModalView } = useSelector((state) => state.ui);

  // Agar Modal close rakhna hai (false), toh kuch mat dikhao (return null)
  if (!isAuthModalOpen) return null;

  return (
    // 2. The Black Blur Background (Overlay)
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-inter">
      
      {/* 3. The Actual Modal Box */}
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={() => dispatch(clearAuthModal())}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors z-10 bg-gray-100 p-2 rounded-full"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="bg-clinic-green p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-clinic-yellow/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="flex items-center justify-center gap-2 text-clinic-yellow mb-4">
            <Activity size={32} />
          </div>
          <h2 className="text-2xl font-black font-poppins text-white mb-2">
            {authModalView === 'login' ? 'Welcome Back' : 'Join Ziva'}
          </h2>
          <p className="text-white/70 text-sm">
            {authModalView === 'login' ? 'Enter your mobile number to access your account.' : 'Create your secure healthcare account.'}
          </p>
        </div>

        {/* Modal Body (Where shadcn forms will go later) */}
        <div className="p-8">
          
          {/* Temporary Placeholder for Form */}
          <div className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-center text-gray-500 text-sm mb-6">
            [ shadcn/ui Phone Number Form will go here ]
          </div>

          <button className="w-full bg-clinic-yellow text-[#021814] py-3 rounded-xl font-bold font-poppins hover:bg-[#021814] hover:text-clinic-yellow transition-all duration-300">
            Continue
          </button>

          {/* Toggle between Login and Signup */}
          <div className="mt-6 text-center text-sm text-gray-500">
            {authModalView === 'login' ? (
              <p>
                New to Ziva?{' '}
                <button 
                  onClick={() => dispatch(setAuthModalView('signup'))}
                  className="font-bold text-clinic-green hover:underline"
                >
                  Create an account
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button 
                  onClick={() => dispatch(setAuthModalView('login'))}
                  className="font-bold text-clinic-green hover:underline"
                >
                  Log In
                </button>
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthModal;