import { useAuth } from "../hooks/useAuth";
import { useLocation } from "wouter";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const [, navigate] = useLocation();

  useEffect(() => {
    // TODO: Uncomment when Firebase auth is configured
    /*
    if (!loading && !user) {
      navigate("/login");
    }
    */
  }, [user, loading, navigate]);

  // TODO: Uncomment when Firebase auth is configured
  /*
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-carbon-green-50 to-carbon-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-carbon-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }
  */

  return children;
}