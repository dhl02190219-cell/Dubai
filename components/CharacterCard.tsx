import React from 'react';
import { Character } from '../types';
import { Heart, Brain, MessageCircle, User } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-oven-cream hover:border-oven-pistachio transition-colors flex flex-col md:flex-row">
      
      {/* Image Section - 1:1 Aspect Ratio on Desktop determined by height of content */}
      <div className="w-full md:w-auto md:min-w-[400px] md:max-w-[500px] relative self-stretch">
        <div className="w-full h-full md:aspect-square relative">
             <img 
              src={character.image} 
              alt={character.name} 
              className="w-full h-full object-cover absolute inset-0" 
            />
            {/* Mobile Title Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 md:hidden">
              <h2 className="text-2xl font-heading text-white font-bold">{character.name}</h2>
              <p className="text-white/90 text-sm">{character.role}</p>
            </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
        {/* Header */}
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
          
          {/* Mobile Info Header */}
          <div className="md:hidden mb-4 flex gap-2">
             <span className={`${character.color} text-white px-3 py-1 rounded-full text-xs font-bold uppercase`}>
                  MBTI: {character.psychology.mbti}
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
              {character.age}
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