import React from 'react';
import PropTypes from 'prop-types';
import Song from '../../components/song/Song';
import './AllSongs.scss';

const renderAllSongs = (allsongs) => {
  const renderSongs = allsongs.map((song) => (
    <React.Fragment key={song.id}>
      <Song song={song} />
    </React.Fragment>
  ));
  return renderSongs;
};

const AllSongs = ({ allsongs }) => {
  console.log('allsongs: ', allsongs);
  const renderSongs = renderAllSongs(allsongs);
  if (allsongs.length !== 0) {
    return (
      <div className="songs">
        {renderSongs}
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
