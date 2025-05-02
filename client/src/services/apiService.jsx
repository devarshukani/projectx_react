import api from "./api";

// Generalized function to fetch data from any endpoint
export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(`/${endpoint}`);
    return response.data; // Axios automatically parses the JSON response
  } catch (error) {
    console.error("Error fetching data:", error);

    if (error.response) {
      // The request was made, but the server responded with a non-2xx status code
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request
      console.error("Error setting up the request:", error.message);
    }

    throw error; // Re-throw the error for the caller to handle
  }
};

// Generalized function to post data to any endpoint
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(`/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${endpoint}:`, error);

    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }

    throw error;
  }
};

// Generalized function to update data at any endpoint with PUT method
export const putData = async (endpoint, data) => {
  try {
    const response = await api.put(`/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating data at ${endpoint}:`, error);

    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }

    throw error;
  }
};

// Function to delete data from any endpoint
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(`/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting data from ${endpoint}:`, error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
    }
    throw error;
  }
};

// Specific function to create a category (uses the generalized postData function)
export const createCategory = async (endpoint, categoryData) => {
  return postData(endpoint, categoryData);
};

// Login service
export const loginAdmin = async (credentials) => {
  try {
    const response = await api.post("/admin/login", {
      Email: credentials.email,
      Password: credentials.password,
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Function to declare results for a question
export const declareResults = async (questionId, correctOptionId = null) => {
  try {
    const response = await api.post(
      `/questions/${questionId}/declare-results`,
      {
        correct_option_id: correctOptionId,
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error declaring results for question ${questionId}:`, error);
    throw error;
  }
};

// Auth Services
export const sendOtp = async (phoneNumber, type = "login") => {
  return postData("auth/send-otp", { phoneNumber, type });
};

export const verifyOtp = async (phoneNumber, otp, type = "login") => {
  return postData("auth/verify-otp", { phoneNumber, otp, type });
};

export const registerUser = async (userData) => {
  return postData("auth/register", userData);
};

export const loginUser = async (credentials) => {
  return postData("auth/login", credentials);
};

// Test Services
export const getTests = async (filters = {}) => {
  const queryString = new URLSearchParams(filters).toString();
  return fetchData(`tests?${queryString}`);
};

export const getTestDetails = async (testId) => {
  return fetchData(`tests/${testId}`);
};

export const startTest = async (testId) => {
  return postData(`tests/${testId}/start`);
};

export const submitTest = async (testId, answers) => {
  return postData(`tests/${testId}/submit`, { answers });
};

export const getTestResult = async (testId) => {
  return fetchData(`tests/${testId}/result`);
};

export const fetchTests = async (page = 1, limit = 10) => {
  try {
    const response = await api.get(`/tests?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tests:", error);
    throw error;
  }
};

// Video Services
export const getVideos = async (filters = {}) => {
  const queryString = new URLSearchParams(filters).toString();
  return fetchData(`videos?${queryString}`);
};

export const getVideoDetails = async (videoId) => {
  return fetchData(`videos/${videoId}`);
};

export const updateVideoProgress = async (videoId, progress) => {
  return postData(`videos/${videoId}/progress`, { progress });
};

// Solutions Services
export const getSolutions = async (questionId) => {
  return fetchData(`solutions/${questionId}`);
};

export const submitSolution = async (questionId, solution) => {
  return postData(`solutions/${questionId}`, solution);
};

export const reportQuestion = async (questionId, report) => {
  return postData(`questions/${questionId}/report`, report);
};

// Bookmark Services
export const getBookmarks = async () => {
  return fetchData("bookmarks");
};

export const addBookmark = async (itemId, type) => {
  return postData("bookmarks", { itemId, type });
};

export const removeBookmark = async (bookmarkId) => {
  return deleteData(`bookmarks/${bookmarkId}`);
};

// Performance Services
export const getUserPerformance = async () => {
  return fetchData("performance");
};

export const getSubjectPerformance = async (subjectId) => {
  return fetchData(`performance/subjects/${subjectId}`);
};

export const getLeaderboard = async (testId) => {
  return fetchData(`leaderboard/${testId}`);
};

// Discussion Services
export const getDiscussions = async (filters = {}) => {
  const queryString = new URLSearchParams(filters).toString();
  return fetchData(`discussions?${queryString}`);
};

export const createDiscussion = async (discussion) => {
  return postData("discussions", discussion);
};

export const addComment = async (discussionId, comment) => {
  return postData(`discussions/${discussionId}/comments`, { comment });
};

export const likeDiscussion = async (discussionId) => {
  return postData(`discussions/${discussionId}/like`);
};

// Profile Services
export const updateProfile = async (userData) => {
  return putData("profile", userData);
};

export const updateNotificationSettings = async (settings) => {
  return putData("profile/notifications", settings);
};
