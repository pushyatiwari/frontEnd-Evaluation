import React from 'react';
import PropTypes from 'prop-types';
import Song from '../../components/song/Song';
import './AllGenres.scss';
import Button from '../../components/button/Button';
import pop from '../../assets/genre-pop.png';
import country from '../../assets/genre-country.png';
import rock from '../../assets/genre-rock.png';
import bollywood from '../../assets/genre-bollywood.png';

const renderAllSongs = (allsongs, handlePressFavourite) => {
  console.log('gensres all songs: ', allsongs);
  let i = 0;
  const renderSongs = allsongs.map((song) => {
    i += 1;
    return (
      <React.Fragment key={song.id}>
        <Song song={song} color={i % 2 === 0} handlePressFavourite={handlePressFavourite} />
      </React.Fragment>
    );
  });
  return renderSongs;
};
const renderAllGenres = (groupedGenres, handlePressFavourite) => (
  Object.keys(groupedGenres).map((genre) => {
    let genreImage = pop;
    if (genre === 'Country') {
      genreImage = country;
    }
    if (genre === 'Rock') {
      genreImage = rock;
    }
    if (genre === 'Bollywood') {
      genreImage = bollywood;
    }
    return (
      <div className="genre-container" key={genre}>
        <div className="genre-title">
          <img src={genreImage} alt="genre" />
          <Button text={genre} className="genre-button" onClick={() => {}} />
        </div>
        <div className="all-genre-songs">
          {renderAllSongs(groupedGenres[genre], handlePressFavourite)}
        </div>
      </div>
    );
  })
);

const AllGenres = ({ groupedGenres, handlePressFavourite }) => {
  console.log('inside all genres', groupedGenres);
  return (
    <>
      <div className="all-songs-container">
        <h1>genres</h1>
        {renderAllGenres(groupedGenres, handlePressFavourite)}
      </div>
    </>
  );
};

AllGenres.propTypes = {
  groupedGenres: PropTypes.objectOf(PropTypes.shape).isRequired,
  handlePressFavourite: PropTypes.func.isRequired,

};
export default AllGenres;
