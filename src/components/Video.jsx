import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Video = ({ src, title, i, currentVideoIndex }) => {
  const [isLiked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!isLiked);
  };

  return (
    <div className="video-container">
      <video
        autoPlay={true}
        muted
        loop
        style={{ display: i === currentVideoIndex ? 'block' : 'none' }}
      >
        <source src={src} type="video/mp4" />
      </video>
      {i === currentVideoIndex && (
        <div className="video-overlay">
          <h2 className="video-title">{title}</h2>
          <div className="like-icon" onClick={handleLikeClick}>
            {isLiked ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
