import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  // Temporarily returning children directly without auth check
  return children;

  // Original authentication logic commented out for now
  /*
  const { isAuthenticated } = useSelector((state) => state.auth);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
  */
};

export default PrivateRoute;
