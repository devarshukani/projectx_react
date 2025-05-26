const API_BASE_URL = "http://13.203.220.236";

export const sendOtp = async (phoneNumber, type) => {
  // For now, we'll just simulate OTP sending
  return Promise.resolve({ success: true });
};

export const verifyOtp = async (phoneNumber, otp) => {
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

export const fetchUsers = async () => {
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

export const getUserById = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/api/users/${userId}`);
  const data = await response.json();

  if (!data.success) {
    throw new Error("Failed to fetch user");
  }

  return data.user;
};

export const createTestAttempt = async (testId, userId) => {
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

export const fetchTests = async (page = 1, limit = 10) => {
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

export const submitTestAttemptAnswer = async (answerData) => {
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

export const updateTestAttemptAnswer = async (answerData) => {
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