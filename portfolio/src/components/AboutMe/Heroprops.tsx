import React from 'react';
import './Heroprops.css'

interface HeroProps {
  profileImage?: string;
  pinyin?: string;
  chineseName?: string;
  englishName?: string;
  pronunciation?: string;
}

const Hero: React.FC<HeroProps> = ({
  profileImage = '../assets/images/ml_pfp.JPG', 
  pinyin = 'lù qīng yán',
  chineseName = '陆 清 妍',
  englishName = 'Monica Lu',
  pronunciation = 'Lu, Tsing-yan'
}) => {
  return (
      <div className="hero-container">
        <div className="">
          <img 
            src={profileImage} 
            alt={`${englishName} profile`}
            className="profile-img"
          />
        </div>
        <div className="name-section">
          <div className="">{pinyin}</div>
          <div className="">{chineseName}</div>
          <div className ="">{pronunciation}</div>
          <div className="">{englishName}</div>
        </div>
      </div>
  );
};

export default Hero;