import React from 'react';
import PropTypes from 'prop-types';
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

const AllSongs = ({ allsongs }) => {
  console.log('allsongs: ', allsongs);
  const renderSongs = renderAllSongs(allsongs);
  if (allsongs.length !== 0) {
    return (
      <div className="all-songs-container">
        <p className="all-songs-text"><b>all songs</b></p>
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

};
export default AllSongs;
