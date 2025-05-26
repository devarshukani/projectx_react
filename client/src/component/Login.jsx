import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setPhoneNumber,
  loginSuccess,
  setLoading,
  setError,
} from "../redux/slices/authSlice";
import { fetchUsers } from "../services/apiService.jsx";

const countryList = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+81", country: "Japan" },
  { code: "+86", country: "China" },
];

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [localPhoneNumber, setLocalPhoneNumber] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (localPhoneNumber.length === 10) {
      dispatch(setLoading(true));
      try {
        // Fetch users and find matching phone number
        const response = await fetchUsers();
        const user = response.users.find((u) => u.phone === localPhoneNumber);

        if (!user) {
          throw new Error("No user found with this phone number");
        }

        // Store user data in Redux and navigate to home
        dispatch(loginSuccess(user));
        navigate("/");
      } catch (err) {
        dispatch(setError(err.message || "Failed to process request"));
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      dispatch(setError("Please enter a valid 10-digit phone number"));
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
              <div className="flex items-stretch">
                {/* Country Code Dropdown */}
                <div className="relative inline-flex">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-3 border border-gray-300 rounded-l-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 h-12"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    {selectedCountry.code}
                  </button>
                  {showDropdown && (
                    <div className="absolute z-10 mt-full w-40 bg-white shadow-lg rounded-md">
                      {countryList.map((country) => (
                        <div
                          key={country.code}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setSelectedCountry(country);
                            setShowDropdown(false);
                          }}
                        >
                          {country.country} ({country.code})
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* Phone Number Input */}
                <input
                  type="tel"
                  maxLength="10"
                  className="flex-1 min-w-0 block w-full px-3 py-3 h-12 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter phone number"
                  value={localPhoneNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    if (value.length <= 10) {
                      setLocalPhoneNumber(value);
                      dispatch(setError(""));
                    }
                  }}
                />
              </div>
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>

          <div className="text-center mt-4">
            <span className="text-zinc-500">Coming for the first time? </span>
            <Link to="/signup" className="text-blue-600 hover:text-blue-700">
              Signup
            </Link>
          </div>

          <div className="flex justify-center space-x-4 mt-4">
            <img
              src="/facebookIcon.png"
              alt="Facebook"
              className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
            />
            <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:opacity-80">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="#EA4335"
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center">
        <img src="/login.svg" alt="Login" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Login;
