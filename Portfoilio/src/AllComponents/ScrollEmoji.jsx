import React, { useState, useEffect } from 'react';
import { Smile, ThumbsUp, Heart, Star, Award } from 'lucide-react';

// Component for the animated emoji that appears when scrolling up
const ScrollEmoji = ({ visible }) => {
  const [currentEmoji, setCurrentEmoji] = useState(0);
  const emojis = [
    <Smile className="text-yellow-500" />,
    <ThumbsUp className="text-blue-500" />,
    <Heart className="text-red-500" />,
    <Star className="text-amber-400" />,
    <Award className="text-purple-500" />
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji(prev => (prev + 1) % emojis.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 z-50 bg-white p-3 rounded-full shadow-lg ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
      <div className="text-3xl">
        {emojis[currentEmoji]}
      </div>
    </div>
  );
};

export default ScrollEmoji;
