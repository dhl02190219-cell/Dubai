import React from 'react';
import Navbar from './components/Navbar';
import CharacterCard from './components/CharacterCard';
import { CHARACTERS, WORLD_INFO } from './constants';
import { MapPin, Clock, Star, Award, Coffee, ArrowDown, ChefHat } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-body text-gray-800 bg-oven-cream selection:bg-oven-pink selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-12 md:pt-40 md:pb-24 px-4 overflow-hidden min-h-[80vh] flex flex-col justify-center items-center">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 drop-shadow-sm leading-tight">
            <span className="text-oven-brown">두</span>
            <span className="text-oven-pistachio">쫀</span>
            <span className="text-oven-kataifi drop-shadow-md" style={{ textShadow: '2px 2px 0px #D2691E' }}>쿠</span> <br className="md:hidden" />
            <span className="text-oven-brown text-4xl md:text-6xl block mt-2">제과제빵학원</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-body">
            개성 넘치는 수강생들과 함께하는 즐거운 베이킹 클래스.<br/>
            초보자도 환영합니다. 지금 시작해보세요!
          </p>
          
          <div className="flex flex-col items-center gap-4 animate-bounce mt-8 cursor-pointer" onClick={() => document.getElementById('characters')?.scrollIntoView({ behavior: 'smooth'})}>
            <span className="text-oven-brown font-bold text-sm">수강생 만나보기</span>
            <div className="bg-oven-brown text-white p-3 rounded-full shadow-lg">
              <ArrowDown size={24} />
            </div>
          </div>
        </div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-16 md:py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-oven-brown mb-3">함께하는 수강생들</h2>
            <div className="w-24 h-1 bg-oven-light-brown mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600">다양한 매력을 가진 분들과 함께 수업이 진행됩니다.</p>
          </div>
          
          <div className="flex flex-col gap-8 md:gap-12">
            {CHARACTERS.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>
        </div>
      </section>

      {/* Academy Info (Previously Location) */}
      <section id="academy-info" className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-oven-cream relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-oven-brown inline-block border-b-4 border-oven-pistachio pb-2">
                {WORLD_INFO.name}
              </h2>
            </div>
            
            <p className="text-gray-700 leading-loose text-lg text-center mb-12 max-w-3xl mx-auto">
              {WORLD_INFO.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-oven-cream/50 p-6 rounded-2xl border border-oven-kataifi text-center hover:-translate-y-1 transition-transform">
                <div className="bg-oven-brown text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-oven-brown">전문 강사진</h3>
                <p className="text-gray-600 text-sm">르 꼬르동 블루 출신 및 제과기능장 보유 강사진의 체계적인 지도</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-oven-cream/50 p-6 rounded-2xl border border-oven-kataifi text-center hover:-translate-y-1 transition-transform">
                <div className="bg-oven-pistachio text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-oven-brown">최고급 시설</h3>
                <p className="text-gray-600 text-sm">이탈리아산 데크 오븐 및 최신식 반죽기 완비, 1인 1실습대 보장</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-oven-cream/50 p-6 rounded-2xl border border-oven-kataifi text-center hover:-translate-y-1 transition-transform">
                <div className="bg-orange-400 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-oven-brown">맞춤형 커리큘럼</h3>
                <p className="text-gray-600 text-sm">취미반부터 창업반까지,<br/>수준별 맞춤 수업 진행</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center gap-8 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-oven-light-brown" />
                <span>운영시간: {WORLD_INFO.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-oven-light-brown" />
                <span>위치: 서울시 강남구 논현로 123 (두쫀쿠 빌딩 2층)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'radial-gradient(#8B4513 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}></div>
      </section>

      {/* Footer */}
      <footer className="bg-oven-brown text-oven-cream py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <ChefHat size={32} />
            <span className="font-heading text-2xl font-bold">Sweet Oven</span>
          </div>
          <p className="mb-4 text-white/60">
            당신의 일상에 달콤함을 더해드립니다.
          </p>
          <div className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Dujjonku Baking Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;