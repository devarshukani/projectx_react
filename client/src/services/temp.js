import { jwtDecode } from "jwt-decode";
import api from "./api";

export const handleGoogleLogin = async (credentialResponse) => {
  try {
    // Decode the credential to get user info
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Decoded Google token:", decoded);
    // Send the token to your backend to verify and create/update user
    const response = await api.post('/auth/google', {
      credential: credentialResponse.credential,
      email: decoded.email,
      name: decoded.name,
      picture: decoded.picture
    });

    return response.data;
  } catch (error) {
    console.error('Google login error:', error);
    throw new Error(error.response?.data?.message || 'Google login failed');
  }
};
