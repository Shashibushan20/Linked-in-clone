// ProfilePhoto.js

import React from 'react';
import PropTypes from 'prop-types';
import './ProfilePhoto.css'

const ProfilePhoto = ({ title, image }) => {
  return (
    <div className="profilePhoto">
      <img
        className="profilePhoto_image"
        src={image}
        alt={`${title} profile photo`}
      />
      <p>{title}</p>
    </div>
  );
};

ProfilePhoto.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProfilePhoto;
