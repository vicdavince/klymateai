import { useState } from "react";
import { useLocation } from "wouter";
import { Bell, Leaf, User, LogOut, Plus, MoreVertical, ChevronRight } from "lucide-react";
// Firebase imports - uncomment when ready to use
// import { logOut } from "../firebase";
// import { useAuth } from "../hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import StatsCard from "@/components/ui/stats-card";
import AgentCard from "@/components/ui/agent-card";
import ActivityItem from "@/components/ui/activity-item";
import QuickActionButton from "@/components/ui/quick-action-button";
import ChatInterface from "@/components/ui/chat-interface";

export default function Dashboard() {
  const [, navigate] = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // TODO: Uncomment when Firebase auth is configured
  // const { user, loading } = useAuth();

  const handleLogout = async () => {
    // TODO: Uncomment when Firebase auth is configured
    /*
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
    */
    
    // Temporary direct navigation - remove when Firebase is ready
    navigate("/login");
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const statsData = [
    {
      title: "CO2 Saved",
      value: "2.4 tons",
      change: "↑ 12% this month",
      changeColor: "text-carbon-green-500",
      icon: Leaf,
      iconBg: "bg-carbon-green-100",
      iconColor: "text-carbon-green-500"
    },
    {
      title: "Active Agents",
      value: "8",
      change: "↑ 3 new agents",
      changeColor: "text-carbon-blue-500",
      icon: User,
      iconBg: "bg-carbon-blue-100",
      iconColor: "text-carbon-blue-500"
    },
    {
      title: "Energy Optimized",
      value: "347 kWh",
      change: "↑ 24% efficiency",
      changeColor: "text-carbon-green-500",
      icon: Bell,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500"
    },
    {
      title: "Carbon Credits",
      value: "156",
      change: "↑ 18 earned",
      changeColor: "text-carbon-green-500",
      icon: Leaf,
      iconBg: "bg-green-100",
      iconColor: "text-green-500"
    }
  ];

  const agentsData = [
    {
      name: "Carbon Tracker",
      status: "Monitoring emissions • Active",
      icon: "recycle",
      iconBg: "bg-carbon-green-500",
      statusBadge: "Active"
    },
    {
      name: "Energy Optimizer",
      status: "Optimizing consumption • Active",
      icon: "chart-line",
      iconBg: "bg-carbon-blue-500",
      statusBadge: "Active"
    },
    {
      name: "Solar Predictor",
      status: "Forecasting solar output • Active",
      icon: "sun",
      iconBg: "bg-yellow-500",
      statusBadge: "Active"
    }
  ];

  const activitiesData = [
    {
      message: "Carbon Tracker detected 15% reduction in emissions",
      time: "2 hours ago",
      icon: Leaf,
      iconBg: "bg-carbon-green-100",
      iconColor: "text-carbon-green-500"
    },
    {
      message: "Energy Optimizer saved 47 kWh today",
      time: "4 hours ago",
      icon: Bell,
      iconBg: "bg-carbon-blue-100",
      iconColor: "text-carbon-blue-500"
    },
    {
      message: "Solar Predictor forecasts 85% efficiency tomorrow",
      time: "6 hours ago",
      icon: Bell,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500"
    },
    {
      message: "You earned 12 new carbon credits",
      time: "1 day ago",
      icon: Leaf,
      iconBg: "bg-green-100",
      iconColor: "text-green-500"
    }
  ];

  const quickActionsData = [
    {
      title: "Chat with AI Agent",
      icon: Bell,
      iconColor: "text-carbon-green-500",
      bgColor: "bg-carbon-green-50 hover:bg-carbon-green-100",
      onClick: toggleChat
    },
    {
      title: "Create New Agent",
      icon: Plus,
      iconColor: "text-carbon-blue-500",
      bgColor: "bg-carbon-blue-50 hover:bg-carbon-blue-100"
    },
    {
      title: "Generate Report",
      icon: Bell,
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-50 hover:bg-yellow-100"
    },
    {
      title: "Training Center",
      icon: Bell,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50 hover:bg-purple-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-carbon-green-400 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-carbon-blue-400 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping animation-delay-3000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-teal-400 rounded-full animate-ping animation-delay-4000"></div>
      </div>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200 relative z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 bg-gradient-to-br from-carbon-green-500 to-carbon-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                <Leaf className="text-white animate-spin-slow" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Klymate AI</h1>
                <p className="text-sm text-gray-600">Intelligent Climate Platform</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Notification Bell */}
              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bell size={18} />
              </Button>
              
              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-gradient-to-br from-carbon-green-500 to-carbon-blue-500 rounded-full flex items-center justify-center">
                  <User className="text-white text-sm" size={16} />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">
                    {/* TODO: Replace with user?.displayName when Firebase is ready */}
                    John Doe
                  </p>
                  <p className="text-xs text-gray-600">
                    {/* TODO: Replace with user?.email when Firebase is ready */}
                    john@example.com
                  </p>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut size={18} />
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-carbon-green-500 via-emerald-500 to-carbon-blue-500 rounded-2xl p-8 mb-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2 animate-fade-in-right">Welcome to your AI Dashboard</h2>
              <p className="text-green-100 text-lg animate-fade-in-right animation-delay-300">Manage your carbon footprint with intelligent AI agents</p>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200"
                alt="Renewable energy landscape with wind turbines"
                className="rounded-xl w-48 h-32 object-cover opacity-90"
              />
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in-up animation-delay-300">
          {statsData.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Agents Panel */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Active AI Agents</h3>
                <Button className="bg-carbon-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-carbon-green-600 transition-colors">
                  <Plus className="mr-2" size={16} />
                  Add Agent
                </Button>
              </div>
              
              <div className="space-y-4">
                {agentsData.map((agent, index) => (
                  <AgentCard key={index} {...agent} />
                ))}
              </div>
            </div>
            
            {/* Analytics Chart */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Carbon Footprint Analytics</h3>
                <Select defaultValue="7days">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7days">Last 7 days</SelectItem>
                    <SelectItem value="30days">Last 30 days</SelectItem>
                    <SelectItem value="90days">Last 90 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Chart Placeholder */}
              <div className="h-64 bg-gradient-to-t from-carbon-green-50 to-transparent rounded-lg border-2 border-dashed border-carbon-green-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-carbon-green-400 text-4xl mb-4">📊</div>
                  <p className="text-gray-600">Carbon Analytics Chart</p>
                  <p className="text-sm text-gray-500">Chart.js integration placeholder</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
              
              <div className="space-y-4">
                {activitiesData.map((activity, index) => (
                  <ActivityItem key={index} {...activity} />
                ))}
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-800">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
              
              <div className="space-y-3">
                {quickActionsData.map((action, index) => (
                  <QuickActionButton key={index} {...action} />
                ))}
              </div>
            </div>
            
            {/* Environmental Impact */}
            <div className="bg-gradient-to-br from-carbon-green-500 to-carbon-blue-500 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Environmental Impact</h3>
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200"
                alt="Sunlight streaming through forest trees"
                className="w-full h-32 object-cover rounded-lg mb-4 opacity-90"
              />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-green-100">Trees Equivalent</span>
                  <span className="font-semibold">127 trees</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-100">Miles Not Driven</span>
                  <span className="font-semibold">5,847 miles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-100">Homes Powered</span>
                  <span className="font-semibold">3.2 homes/day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Interface */}
      <ChatInterface isOpen={isChatOpen} onToggle={toggleChat} />
    </div>
  );
}