import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Song from '../../components/song/Song';
import './AllSongs.scss';

const renderAllSongs = (allsongs) => {
  let i = 0;
  const renderSongs = allsongs.map((song) => {
    i += 1;
    return (
      <React.Fragment key={song.id}>
        <Song song={song} color={i % 2 === 0} />
      </React.Fragment>
    );
  });
  return renderSongs;
};

const toggleIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX///8AAACVlZXf39/ExMQLCwvk5OSlpaWZmZn29vbe3t7v7++fn5+ioqKRkZHOzs6jB9wbAAAAvklEQVR4nO3dOw6DMABEQUhCQr7c/7ap3SEZvBjNnMCvc7GyhwEAAAAAAAAAAAAA4DzmSw/misKxDxWFU/rsq0wKFR6eQoXHV1OYPvtKFYXXPlQUAgAAAAAAAAAAAC3dkp4tCqOr0XuLwuhGWKFChQoVdlKYDGxTeP47DQAAAAAAAAAAANDS9s82v97pptIOq9FPuqm0w0b4kW4qKVSoME9h/4XbB47fdFNp+z+7fku6CQAAAAAAAAAAAADg2P7Dmhc7T2FttAAAAABJRU5ErkJggg==';
const AllSongs = ({ allsongs, groupByGenres }) => {
  console.log('allsongs: ', allsongs);
  const renderSongs = renderAllSongs(allsongs);
  if (allsongs.length !== 0) {
    return (
      <div className="all-songs-container">
        <p className="all-songs-text">
          <b>all songs</b>
          <Link to="/allgenres">
            <button type="button" className="toggleIconButton" onClick={groupByGenres}>
              <img src={toggleIcon} alt="toggle" className="toggleIcon" />
            </button>
          </Link>
        </p>
        <div className="songs">
          {renderSongs}
        </div>
      </div>
    );
  }
  return (
    <div> loading...</div>
  );
};

AllSongs.propTypes = {
  allsongs: PropTypes.arrayOf(PropTypes.shape).isRequired,
  groupByGenres: PropTypes.func.isRequired,

};
export default AllSongs;
