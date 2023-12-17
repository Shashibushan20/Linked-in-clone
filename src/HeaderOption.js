// HeaderOption.js
import React from 'react';
import './HeaderOption.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption({ Icon, title, image, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div className='headerOption'>
      {Icon && <FontAwesomeIcon icon={Icon} className='headerOption_icon' />}
      {image && <img src={image} alt={user.email[0]} className='headerOption_image'  onClick={onClick} />}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  );
}

export default HeaderOption;
