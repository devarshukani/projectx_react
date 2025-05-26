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

// Test attempt services
export const closeTestAttempt = async (attemptId, userId, reason = "completed") => {
  return putData(`test-attempts/${attemptId}/close`, {
    user_id: userId,
    reason
  });
};

// Test attempt answer services
export const submitTestAttemptAnswer = async (answerData) => {
  console.log("API: Submitting test attempt answer:", answerData);
  try {
    const response = await fetch(`${API_BASE_URL}/api/test-attempt-answers/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        test_attempt_id: answerData.test_attempt_id,
        user_id: answerData.user_id,
        test_id: answerData.test_id,
        question_id: answerData.question_id,
        selected_option: answerData.selected_option,
        time_taken: answerData.time_taken,
        is_skipped: answerData.is_skipped
      })
    });

    const data = await response.json();
    console.log("API: Submit answer response:", data);

    if (!response.ok) {
      throw new Error(data.message || "Failed to submit answer");
    }

    return data;
  } catch (error) {
    console.error("API: Error submitting answer:", error);
    throw error;
  }
};

export const updateTestAttemptAnswer = async (answerData) => {
  // Since we're using the same endpoint for both submit and update,
  // just call submitTestAttemptAnswer
  return submitTestAttemptAnswer(answerData);
};

const API_BASE_URL = "http://13.203.220.236";

// Auth Services with direct fetch
export const sendOtpDirect = async (phoneNumber, type) => {
  // For now, we'll just simulate OTP sending
  return Promise.resolve({ success: true });
};

export const verifyOtpDirect = async (phoneNumber, otp) => {
  // Hardcoded OTP verification
  if (otp !== "123456") {
    throw new Error("Invalid OTP");
  }

  // If OTP is correct, fetch users to find matching phone number
  const response = await fetch(`${API_BASE_URL}/api/users`);
  const data = await response.json();

  if (!data.success) {
    throw new Error("Failed to verify user");
  }

  // Find user with matching phone number
  const user = data.users.find((u) => u.phone === phoneNumber);
  if (!user) {
    throw new Error("User not found with this phone number");
  }

  return { success: true, user };
};

export const fetchUsersDirect = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users`);
    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to fetch users");
    }

    return data;
  } catch (error) {
    throw new Error("Failed to fetch users: " + error.message);
  }
};

export const getUserByIdDirect = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/api/users/${userId}`);
  const data = await response.json();

  if (!data.success) {
    throw new Error("Failed to fetch user");
  }

  return data.user;
};

export const createTestAttemptDirect = async (testId, userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/test-attempts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        test_id: testId,
        user_id: userId,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create test attempt");
    }

    return data;
  } catch (error) {
    throw new Error("Failed to create test attempt: " + error.message);
  }
};

export const fetchTestsDirect = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/tests?page=${page}&limit=${limit}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching tests:", error);
    throw new Error("Failed to fetch tests");
  }
};

export const submitTestAttemptAnswerDirect = async (answerData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/test-attempt-answers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answerData),
    });

    const data = await response.json();
    console.log("Submit answer response:", data);

    if (!response.ok) {
      throw new Error(data.message || "Failed to submit answer");
    }

    return data;
  } catch (error) {
    console.error("Error submitting answer:", error);
    throw new Error("Failed to submit answer: " + error.message);
  }
};

export const updateTestAttemptAnswerDirect = async (answerData) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/test-attempt-answers/${answerData.test_attempt_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answerData),
      }
    );

    const data = await response.json();
    console.log("Update answer response:", data);

    if (!response.ok) {
      throw new Error(data.message || "Failed to update answer");
    }

    return data;
  } catch (error) {
    console.error("Error updating answer:", error);
    throw new Error("Failed to update answer: " + error.message);
  }
};

// New createTestAttempt function
export const createTestAttempt = async (testId, userId) => {
  console.log("API: Creating test attempt:", { testId, userId });
  try {
    const response = await postData("test-attempts", {
      test_id: testId,
      user_id: userId,
    });
    console.log("API: Test attempt created:", response);
    return response;
  } catch (error) {
    console.error("API: Error creating test attempt:", error);
    console.error("API: Error details:", {
      status: error.response?.status,
      data: error.response?.data,
    });
    throw error;
  }
};

export const fetchUsers = async () => {
  console.log("API: Fetching users");
  try {
    const response = await fetchData("users");
    console.log("API: Users fetched successfully:", response);
    return response;
  } catch (error) {
    console.error("API: Error fetching users:", error);
    throw error;
  }
};
