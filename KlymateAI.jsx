import React, { useState, useRef, useEffect } from 'react';
import { Send, Leaf, User, Settings, Plus, TreePine, Zap, Car, Home, Utensils, CheckCircle, AlertCircle, Loader, Trophy, Coins, TrendingDown, Target, Activity, MessageSquare, BarChart3, Award, Globe } from 'lucide-react';

const KlymateAI = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your Klymate AI climate coach. I\'m here to help you track, reduce, and improve your carbon footprint. Together, we can make a meaningful impact on climate change while earning real carbon credits. What would you like to work on today?',
      timestamp: new Date(Date.now() - 120000),
      status: 'completed'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isAgentThinking, setIsAgentThinking] = useState(false);
  const [agentStatus, setAgentStatus] = useState('ready');
  const [currentTask, setCurrentTask] = useState(null);
  const [agentSteps, setAgentSteps] = useState([]);
  const [userStats] = useState({
    carbonSaved: 1247,
    klymateCredits: 89.5,
    streak: 12,
    level: 'Eco Warrior'
  });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateClimateCoachWork = (userMessage) => {
    setIsAgentThinking(true);
    setAgentStatus('analyzing');
    
    setTimeout(() => {
      const steps = [
        { id: 1, description: 'Analyzing carbon impact data', status: 'completed' },
        { id: 2, description: 'Calculating footprint reduction', status: 'completed' },
        { id: 3, description: 'Searching sustainability database', status: 'in-progress' },
        { id: 4, description: 'Generating personalized tips', status: 'pending' },
        { id: 5, description: 'Calculating credit rewards', status: 'pending' }
      ];
      
      setAgentSteps(steps);
      setCurrentTask('Creating your sustainability action plan...');
      setAgentStatus('calculating');
      
      let stepIndex = 2;
      const stepInterval = setInterval(() => {
        if (stepIndex < steps.length) {
          setAgentSteps(prev => prev.map((step, idx) => {
            if (idx === stepIndex) return { ...step, status: 'in-progress' };
            if (idx < stepIndex) return { ...step, status: 'completed' };
            return step;
          }));
          stepIndex++;
        } else {
          clearInterval(stepInterval);
          
          setAgentSteps(prev => prev.map(step => ({ ...step, status: 'completed' })));
          setAgentStatus('ready');
          setIsAgentThinking(false);
          setCurrentTask(null);
          
          const aiResponse = {
            id: messages.length + 1,
            type: 'ai',
            content: `Great question about "${userMessage}"! Based on your current habits and goals, here's my analysis:\n\n🌱 **Carbon Impact**: This could reduce your footprint by ~15.3 kg CO₂/month\n💚 **Klymate Credits**: You could earn 2.4 KC (~$3.60) monthly\n🎯 **Personalized Tips**:\n• Switch to renewable energy (saves 45% more)\n• Use public transport 3x/week (adds 1.2 KC)\n• Try plant-based meals twice weekly\n\n**Next Steps**: I can help you create a 30-day challenge to maximize your impact. Would you like me to set that up?`,
            timestamp: new Date(),
            status: 'completed'
          };
          
          setMessages(prev => [...prev, aiResponse]);
        }
      }, 1800);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);
    simulateClimateCoachWork(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress': return <Loader className="w-4 h-4 text-blue-500 animate-spin" />;
      case 'pending': return <AlertCircle className="w-4 h-4 text-gray-400" />;
      default: return <AlertCircle className="w-4 h-4 text-yellow-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'analyzing': return 'text-blue-400';
      case 'calculating': return 'text-green-400';
      case 'ready': return 'text-emerald-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      {/* Sidebar */}
      <div className="w-80 bg-green-900/40 backdrop-blur-sm border-r border-green-800/50 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-green-800/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Klymate AI</h1>
              <p className="text-xs text-emerald-300">Climate Coach</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 rounded-lg text-white font-medium transition-all">
            <Plus className="w-4 h-4" />
            New Session
          </button>
        </div>

        {/* User Stats */}
        <div className="p-6 border-b border-green-800/50">
          <h3 className="text-sm font-semibold text-green-300 mb-4">Your Impact</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-800/30 rounded-lg">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm">Carbon Saved</span>
              </div>
              <span className="text-green-300 font-bold">{userStats.carbonSaved} kg</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-800/30 rounded-lg">
              <div className="flex items-center gap-2">
                <Coins className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm">KC Credits</span>
              </div>
              <span className="text-yellow-300 font-bold">{userStats.klymateCredits}</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-800/30 rounded-lg">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-orange-400" />
                <span className="text-white text-sm">Streak</span>
              </div>
              <span className="text-orange-300 font-bold">{userStats.streak} days</span>
            </div>
          </div>
        </div>

        {/* Coach Status */}
        <div className="p-6 border-b border-green-800/50">
          <h3 className="text-sm font-semibold text-green-300 mb-3">Coach Status</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Activity className={`w-5 h-5 ${getStatusColor(agentStatus)}`} />
              <div>
                <p className="text-white font-medium capitalize">{agentStatus === 'ready' ? 'Ready to help' : agentStatus}</p>
                <p className="text-xs text-gray-400">
                  {currentTask || 'Ask me about sustainability!'}
                </p>
              </div>
            </div>
            
            {agentSteps.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Analysis Steps</h4>
                {agentSteps.map((step) => (
                  <div key={step.id} className="flex items-center gap-2 text-sm">
                    {getStatusIcon(step.status)}
                    <span className={step.status === 'completed' ? 'text-gray-300 line-through' : 'text-white'}>
                      {step.description}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-6 flex-1">
          <h3 className="text-sm font-semibold text-green-300 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            {[
              { icon: Car, label: 'Track Transport', desc: 'Log your daily commute' },
              { icon: Utensils, label: 'Diet Impact', desc: 'Analyze food choices' },
              { icon: Home, label: 'Energy Usage', desc: 'Home efficiency tips' },
              { icon: TreePine, label: 'Carbon Offset', desc: 'Find offset opportunities' },
              { icon: BarChart3, label: 'View Analytics', desc: 'Detailed impact reports' },
              { icon: Award, label: 'Challenges', desc: 'Join eco-challenges' }
            ].map((action, idx) => (
              <button key={idx} className="w-full text-left p-3 rounded-lg hover:bg-green-800/30 transition-colors group">
                <div className="flex items-start gap-3">
                  <action.icon className="w-4 h-4 text-emerald-400 mt-0.5 group-hover:text-emerald-300" />
                  <div>
                    <p className="text-white text-sm font-medium">{action.label}</p>
                    <p className="text-xs text-gray-400">{action.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-green-900/40 backdrop-blur-sm border-b border-green-800/50 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">Climate Coach Active</span>
                <span className="px-2 py-1 bg-emerald-600/30 text-emerald-300 text-xs rounded-full">
                  {userStats.level}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-green-300">
                <Globe className="w-4 h-4" />
                <span>CO₂ Saved Today: 12.4kg</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-green-800/30 rounded-lg transition-colors">
                  <Target className="w-4 h-4 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-green-800/30 rounded-lg transition-colors">
                  <Settings className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.type === 'ai' && (
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
              )}
              
              <div className={`max-w-2xl ${message.type === 'user' ? 'order-first' : ''}`}>
                <div className={`p-4 rounded-2xl ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white ml-auto' 
                    : 'bg-green-900/60 backdrop-blur-sm text-white border border-green-800/30'
                }`}>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
                <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                  {message.timestamp.toLocaleTimeString()}
                  {message.status === 'completed' && <CheckCircle className="w-3 h-3" />}
                </p>
              </div>

              {message.type === 'user' && (
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}

          {isAgentThinking && (
            <div className="flex gap-4 justify-start">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <div className="max-w-2xl">
                <div className="p-4 rounded-2xl bg-green-900/60 backdrop-blur-sm text-white border border-green-800/30">
                  <div className="flex items-center gap-2">
                    <Loader className="w-4 h-4 animate-spin text-green-400" />
                    <span>Your climate coach is analyzing...</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-green-800/50 p-6">
          <div className="flex gap-4 items-end">
            <div className="flex-1 relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about reducing your carbon footprint, earning credits, or sustainable habits..."
                className="w-full px-4 py-3 pr-12 bg-green-900/40 border border-green-800/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none max-h-32 backdrop-blur-sm"
                rows="1"
                disabled={isAgentThinking}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isAgentThinking}
                className="absolute right-3 bottom-3 p-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed rounded-xl transition-all"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
          
          <div className="mt-3 flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Ask me about transport, diet, energy, or lifestyle changes!
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Powered by Klymate AI</span>
              <Leaf className="w-3 h-3 text-green-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KlymateAI;
