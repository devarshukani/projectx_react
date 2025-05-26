import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage if available
const loadState = () => {
  try {
    const savedState = localStorage.getItem("authUser");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      return {
        isAuthenticated: true,
        user: parsedState,
        phoneNumber: parsedState.phoneNumber,
        isOtpSent: false,
        loading: false,
        error: null,
      };
    }
  } catch (err) {
    console.error("Error loading auth state:", err);
  }
  return {
    isAuthenticated: false,
    user: null,
    phoneNumber: null,
    isOtpSent: false,
    loading: false,
    error: null,
  };
};

const initialState = loadState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setOtpSent: (state, action) => {
      state.isOtpSent = action.payload;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;

      // Make sure we store the auth state in localStorage
      const authData = {
        ...action.payload,
        isAuthenticated: true,
      };
      localStorage.setItem("authUser", JSON.stringify(authData));

      // Log the authentication state
      console.log("Auth state after login:", {
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      });
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.phoneNumber = null;
      state.isOtpSent = false;
      state.loading = false;
      state.error = null;
      // Clear auth data from localStorage
      localStorage.removeItem("authUser");
    },
  },
});

export const {
  setLoading,
  setError,
  setPhoneNumber,
  setOtpSent,
  loginSuccess,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
