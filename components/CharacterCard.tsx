import React, { useState } from 'react';
import { Character } from '../types';
import { Heart, Brain, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-oven-cream hover:border-oven-pistachio transition-colors flex flex-col md:flex-row">
      
      {/* Image Section - Clickable on mobile */}
      <div 
        className="w-full md:w-auto md:min-w-[400px] md:max-w-[500px] relative self-stretch cursor-pointer md:cursor-default group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="w-full aspect-square md:h-full relative">
             <img 
              src={character.image} 
              alt={character.name} 
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105 md:group-hover:scale-100" 
            />
            {/* Mobile Title Overlay - Always visible on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden flex flex-col justify-end p-6">
              <div className="transform transition-transform">
                <h2 className="text-3xl font-heading text-white font-bold mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  {character.name}
                </h2>
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <span className={`${character.color} text-white px-2 py-0.5 rounded text-xs font-bold uppercase`}>
                        {character.psychology.mbti}
                      </span>
                     <p className="text-white/90 text-sm font-medium drop-shadow-md">{character.role}</p>
                   </div>
                   <div className={`bg-white/20 p-2 rounded-full backdrop-blur-sm border border-white/30 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      <ChevronDown className="text-white w-5 h-5" />
                   </div>
                </div>
                {!isExpanded && (
                  <p className="text-white/60 text-xs mt-2 text-center animate-pulse">터치하여 상세 정보 보기</p>
                )}
              </div>
            </div>
        </div>
      </div>

      {/* Content Section - Accordion style on mobile */}
      <div className={`flex-1 bg-white flex flex-col justify-center transition-all duration-500 ease-in-out md:flex md:max-h-none md:opacity-100 md:p-10 md:overflow-visible
        ${isExpanded ? 'max-h-[2000px] opacity-100 p-6' : 'max-h-0 opacity-0 p-0 overflow-hidden'}
      `}>
        {/* Header - Desktop */}
        <div className="hidden md:flex justify-between items-start mb-6">
          <div>
            <h2 className="text-4xl font-heading text-oven-brown font-bold mb-1">{character.name}</h2>
            <p className="text-gray-400 text-sm font-body tracking-wider">{character.engName}</p>
          </div>
          <div className={`text-center`}>
            <span className={`${character.color} text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase shadow-sm inline-block mb-1`}>
              {character.psychology.mbti}
            </span>
             <p className="text-xs text-gray-500 font-bold">{character.role}</p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="space-y-6">
          
          {/* Mobile Info Header - Only need age here as Name/MBTI/Role are on image */}
          <div className="md:hidden mb-4 flex gap-2">
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
              {character.age}
            </span>
             <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
              {character.engName}
            </span>
          </div>

          <div className="bg-orange-50/60 p-4 rounded-xl border border-orange-100/50">
            <h4 className="font-bold text-oven-light-brown flex items-center gap-2 mb-2 text-lg">
              <Heart size={20} /> 외모
            </h4>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{character.appearance}</p>
          </div>

          <div className="bg-pink-50/60 p-4 rounded-xl border border-pink-100/50">
            <h4 className="font-bold text-pink-500 flex items-center gap-2 mb-2 text-lg">
              <Brain size={20} /> 성격 & 심리
            </h4>
            <div className="text-gray-700 space-y-2 text-sm md:text-base">
               <div className="flex flex-wrap gap-2 items-center">
                  <span className="font-semibold text-xs bg-white px-2 py-0.5 rounded border border-pink-200 text-pink-600">Enneagram {character.psychology.enneagram}</span>
                  {character.psychology.traits.map((trait, idx) => (
                      <span key={idx} className="bg-white text-pink-500 px-2 py-0.5 rounded-full text-xs font-medium border border-pink-100">
                        #{trait}
                      </span>
                    ))}
               </div>
              <p className="leading-relaxed">{character.psychology.logic}</p>
            </div>
          </div>

          <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100/50">
            <h4 className="font-bold text-blue-500 flex items-center gap-2 mb-2 text-lg">
              <MessageCircle size={20} /> 말투
            </h4>
            <p className="text-gray-700 italic bg-white/60 p-3 rounded-lg text-sm md:text-base">"{character.speech}"</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CharacterCard;