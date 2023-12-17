import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Add this line
import './InputOption.css';

// function InputOption({ Icon, title, color }) {

  function InputOption({ Icon, title, color }) {
    const [isLiked, setIsLiked] = useState(false);
  
    const handleLikeClick = () => {
      setIsLiked(!isLiked);
    };

  return (
    
    <div className={`inputOption ${isLiked ? 'inputOption--liked' : ''}`} onClick={title === 'Like' ? handleLikeClick : undefined}>
      <FontAwesomeIcon icon={Icon} style={{ color: color }} />
      <h5>{title}</h5>
    </div>
  );
}

export default InputOption;
