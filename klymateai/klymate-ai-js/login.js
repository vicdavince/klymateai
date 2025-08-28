import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Leaf } from "lucide-react";
// Firebase imports - uncomment when ready to use
// import { signInWithGoogle } from "../firebase";

export default function Login() {
  const [, navigate] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // TODO: Uncomment when Firebase auth is configured
    /*
    try {
      await signInWithGoogle();
      // Navigation will be handled by auth state change
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error (show toast, etc.)
    }
    */
    
    // Temporary direct navigation - remove when Firebase is ready
    navigate("/dashboard");
  };

  const handleGoogleSignIn = async () => {
    // TODO: Uncomment when Firebase auth is configured
    /*
    try {
      await signInWithGoogle();
      // Navigation will be handled by auth state change
    } catch (error) {
      console.error("Google sign-in error:", error);
      // Handle login error (show toast, etc.)
    }
    */
    
    // Temporary direct navigation - remove when Firebase is ready
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-carbon-green-50 via-blue-50 to-carbon-blue-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-carbon-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-20 right-10 w-16 h-16 bg-carbon-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
      </div>
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-gradient-to-br from-carbon-green-500 to-carbon-blue-500 rounded-full flex items-center justify-center mb-6 animate-pulse-slow hover:scale-110 transition-transform duration-300">
            <Leaf className="text-white text-2xl animate-spin-slow" size={24} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2 animate-fade-in-up">Welcome to Klymate AI</h2>
          <p className="text-gray-600 animate-fade-in-up animation-delay-200">Sign in to your intelligent climate platform</p>
        </div>
        
        {/* Login Form */}
        <form onSubmit={handleLogin} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 animate-slide-up">
          <div className="space-y-6">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-carbon-green-500 focus:border-carbon-green-500 transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-carbon-green-500 focus:border-carbon-green-500 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked)}
                  className="h-4 w-4 text-carbon-green-500 focus:ring-carbon-green-500 border-gray-300 rounded"
                />
                <Label htmlFor="remember" className="text-sm text-gray-700">
                  Remember me
                </Label>
              </div>
              <button type="button" className="text-carbon-green-500 hover:text-carbon-green-600 text-sm font-medium">
                Forgot password?
              </button>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-carbon-green-500 to-carbon-blue-500 hover:from-carbon-green-600 hover:to-carbon-blue-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:ring-4 focus:ring-carbon-green-200 border-0"
              style={{ color: 'white' }}
            >
              Sign In
            </Button>
            
            {/* Google Sign In Button - Uncomment when Firebase is configured */}
            {/*
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <Button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:ring-4 focus:ring-gray-200"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </Button>
            */}
            
            <div className="text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-carbon-green-500 hover:text-carbon-green-600 font-medium"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}