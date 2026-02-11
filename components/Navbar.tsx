import React from 'react';
import { ChefHat } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-oven-pink/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-oven-light-brown p-2 rounded-full text-white">
              <ChefHat size={24} />
            </div>
            <span className="font-heading font-bold text-xl text-oven-brown">두쫀쿠 제과제빵학원</span>
          </div>
          <div className="flex space-x-8 font-body text-gray-600">
            {/* Navigation links removed as requested */}
          </div>
          <a 
            href="https://share.crack.wrtn.ai/4qdtay" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-oven-accent hover:bg-pink-600 text-white px-4 py-2 rounded-full font-body text-sm font-bold transition-colors shadow-md flex items-center"
          >
            수강 신청하기
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;