import React, { useEffect, useState } from 'react';
import { Instagram, MessageCircle, Globe, ArrowRight, Sparkles } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      name: 'Instagram',
      description: 'Follow us for updates & behind-the-scenes',
      icon: Instagram,
      url: 'https://instagram.com/tedxbitshyd',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700'
    },
    {
      name: 'WhatsApp Community',
      description: 'Join for announcements & events',
      icon: MessageCircle,
      url: 'https://whatsapp.com/channel/tedxbitshyd',
      color: 'from-green-500 to-emerald-600',
      hoverColor: 'hover:from-green-600 hover:to-emerald-700'
    },
    {
      name: 'Website',
      description: 'Explore past events & speaker stories',
      icon: Globe,
      url: 'https://tedxbitshyd.com',
      color: 'from-blue-500 to-indigo-600',
      hoverColor: 'hover:from-blue-600 hover:to-indigo-700'
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Header Section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* TEDx Logo */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative">
                <img 
                  src="/logo-white.png" 
                  alt="TEDxBITSHyderabad" 
                  className="h-16 w-auto drop-shadow-2xl"
                />
                <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-red-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="space-y-4 max-w-md mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Welcome to the Community!
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Connect with us and be part of <span className="text-red-400 font-medium">ideas worth spreading</span>
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="w-full max-w-md space-y-4">
          {socialLinks.map((link, index) => (
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <button
                onClick={() => handleLinkClick(link.url)}
                className={`w-full bg-gradient-to-r ${link.color} ${link.hoverColor} 
                  rounded-2xl p-4 transition-all duration-300 transform
                  hover:scale-105 hover:shadow-2xl active:scale-95 group relative overflow-hidden`}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                  transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <link.icon className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">{link.name}</h3>
                      <p className="text-white/90 text-sm">{link.description}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={`mt-12 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '1000ms' }}>
          <p className="text-gray-400 text-sm">
            Ideas Worth Spreading • BITS Pilani, Hyderabad
          </p>
          <div className="mt-4 flex justify-center items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-400 text-xs font-medium">LIVE</span>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-red-500 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-32 right-12 w-2 h-2 bg-pink-500 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/2 left-8 w-1 h-1 bg-white rounded-full animate-ping opacity-30"></div>
        <div className="absolute bottom-20 left-16 w-2 h-2 bg-red-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}

export default App;