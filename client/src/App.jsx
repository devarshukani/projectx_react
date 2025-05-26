import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import TestDetails from "./component/TestDetails";
import Test from "./component/Test";
import Video from "./component/Videos";
import TestScreen from "./component/TestScreen";
import TestResult from "./component/TestResult";
import Solutions from "./component/Solutions";
import Bookmark from "./component/Bookmark";
import VideoDetails from "./component/VideoDetails";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import SignUpOtp from "./component/SignUpOtp";
import LoginOtp from "./component/LoginOtp";
import PrivateRoute from "./component/templates/PrivateRoute";
import JobDetails from "./component/JobDetails";
import { GoogleOAuthProvider } from "@react-oauth/google";
import TestAnalysisDashboard from "./component/temp";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <div className="bg-[#f7f7f7] w-screen h-screen flex">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/login-otp" element={<LoginOtp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup-otp" element={<SignUpOtp />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/test"
            element={
              <PrivateRoute>
                <Test />
              </PrivateRoute>
            }
          />
          <Route
            path="/testinfo"
            element={
              <PrivateRoute>
                <TestDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/test/testscreen"
            element={
              <PrivateRoute>
                <TestScreen />
              </PrivateRoute>
            }
          />
          <Route
            path="/test/result/:testId/:attemptId"
            element={
              <PrivateRoute>
                <TestResult />
              </PrivateRoute>
            }
          />
          <Route
            path="/video"
            element={
              <PrivateRoute>
                <Video />
              </PrivateRoute>
            }
          />
          <Route
            path="/video/details"
            element={
              <PrivateRoute>
                <VideoDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/test/solution/:testId/:attemptId"
            element={
              <PrivateRoute>
                <Solutions />
              </PrivateRoute>
            }
          />
          <Route
            path="/bookmark"
            element={
              <PrivateRoute>
                <Bookmark />
              </PrivateRoute>
            }
          />
          <Route
            path="/jobs/:jobId"
            element={
              <PrivateRoute>
                <JobDetails />
              </PrivateRoute>
            }
          />
          {/* <Route path="check" element={<TestAnalysisDashboard testId={7} attemptId={42} />} /> */}
        </Routes>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
