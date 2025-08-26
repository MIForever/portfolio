"use client";

import { useEffect, useState } from "react";
import { Linkedin, Send, Download } from "lucide-react";

export default function FloatingNav() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Track window scroll position
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show nav when scrolled past 100% of viewport height (just finished hero section)
      const triggerPoint = window.innerHeight * 1.0;
      setIsVisible(currentScrollY > triggerPoint);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial value
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!mounted) return null;

  return (
    <div 
      className={`floating-nav p-6 ${isVisible ? 'nav-visible' : 'nav-hidden'}`}
    >
      <div className="flex items-center space-x-4 bg-black/30 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl">
        <a
          href="https://www.linkedin.com/in/inoyatullo-musayev/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-2xl bg-gradient-to-r from-blue-600/40 to-blue-500/40 border border-blue-400/30 shadow-xl hover:scale-105 transition-all duration-200 hover:shadow-blue-500/25"
        >
          <Linkedin className="w-6 h-6 text-blue-300" />
        </a>

        <a
          href="https://t.me/i_musayev"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-2xl bg-gradient-to-r from-cyan-600/40 to-blue-500/40 border border-cyan-400/30 shadow-xl hover:scale-105 transition-all duration-200 hover:shadow-cyan-500/25"
        >
          <Send className="w-6 h-6 text-cyan-300" />
        </a>

        <a
          href="https://drive.google.com/file/d/1Gol3b6F2pIY-5raYj-87indyZtsgbo5W/view"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600/50 to-indigo-600/50 border border-purple-400/40 shadow-xl hover:scale-105 transition-all duration-200 hover:shadow-purple-500/25"
        >
          <div className="flex items-center space-x-2">
            <Download className="w-5 h-6 text-purple-300" />
            <span className="text-purple-300 font-medium">Resume</span>
          </div>
        </a>
      </div>
    </div>
  );
}
