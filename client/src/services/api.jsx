import axios from "axios";

const api = axios.create({
  baseURL: "http://13.203.220.236/api", // TODO: Update this to Assumo backend URL when available
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for API calls
api.interceptors.request.use(
  (config) => {
    const authUser = localStorage.getItem("authUser");
    if (authUser) {
      const { token } = JSON.parse(authUser);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized errors (token expired)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Try to refresh the token
        const refreshToken = JSON.parse(
          localStorage.getItem("authUser")
        )?.refreshToken;
        if (refreshToken) {
          const response = await axios.post(
            `${api.defaults.baseURL}/auth/refresh-token`,
            {
              refreshToken,
            }
          );

          const { token } = response.data;

          // Update token in localStorage
          const authUser = JSON.parse(localStorage.getItem("authUser"));
          authUser.token = token;
          localStorage.setItem("authUser", JSON.stringify(authUser));

          // Retry the original request with new token
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axios(originalRequest);
        }
      } catch (refreshError) {
        // If refresh token fails, logout user
        localStorage.removeItem("authUser");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
