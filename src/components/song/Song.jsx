import React from 'react';
import PropTypes from 'prop-types';
import './Song.scss';

const likeIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlLHjRrXnSZtMYz4tylnrrAfSTY5A5EmyRQ&usqp=CAU';
// const unlikeIcon = 'https://www.materialui.co/materialIcons/action/favorite_grey_192x192.png';
const Song = ({ song, color }) => {
  console.log(`eachsong: ${song}`);
  return (
    <div className={color ? 'white song-container' : 'black song-container'}>
      <div className="album-art-container">
        <img className="album-art" src={song.albumArtUrl} alt="fav" />
      </div>
      <div className="song-card-bottom">
        <div className="song-card-bottom-left">
          <p>{song.name}</p>
          <p>{song.artist.name}</p>
        </div>
        <img className="fav" src={likeIcon} alt="fav" />
      </div>
    </div>
  );
};

Song.propTypes = {
  song: PropTypes.objectOf(PropTypes.shape).isRequired,
  color: PropTypes.bool.isRequired,

};
export default Song;
