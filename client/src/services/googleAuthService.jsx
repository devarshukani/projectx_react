import { jwtDecode } from "jwt-decode";
import api from "./api";

export const handleGoogleLogin = async (credentialResponse) => {
  try {
    // Decode the credential to get user info
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Decoded Google token:", decoded);
    
    // For now, create a user object directly from Google data
    // Later, you can implement proper backend verification
    const userData = {
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
      phoneNumber: "", // You might want to ask for phone number separately
      id: decoded.sub, // Google's unique identifier
      isAuthenticated: true
    };

    // TODO: Once backend is ready, uncomment this
    /*const response = await api.post('/auth/google', {
      credential: credentialResponse.credential
    });
    return response.data;*/

    // For now, return the user data directly
    return userData;
  } catch (error) {
    console.error('Google login error:', error);
    throw new Error(error.response?.data?.message || 'Google login failed');
  }
};
