import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SignUpOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber || "";

  const getMaskedPhoneNumber = (number) => {
    if (!number) return "";
    const lastFourDigits = number.slice(-4);
    return `XXXXXX${lastFourDigits}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      console.log("SignUp OTP submitted:", otp);
      // Will integrate API later
    }
  };

  return (
    <div className="flex h-screen w-full">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="max-w-md w-full space-y-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Crack your goal with top learning platform
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                maxLength="6"
                className="w-full px-3 py-3 h-12 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-center text-lg tracking-widest"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "");
                  if (value.length <= 6) {
                    setOtp(value);
                  }
                }}
              />
              {phoneNumber && (
                <p className="text-gray-600 text-sm mt-2 text-center">
                  OTP sent to the phone no. {getMaskedPhoneNumber(phoneNumber)}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={otp.length !== 6}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center">
        <img src="/login.svg" alt="Login" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default SignUpOtp;
