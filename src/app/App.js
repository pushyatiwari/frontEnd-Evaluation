import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../pages/home/Home';
import AllSongs from '../pages/allSongs/AllSongs';
import NavBar from '../components/navbar/Navbar';
import { token } from '../constants';
import AllGenres from '../pages/allGenres/AllGenres';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [groupedGenres, setGroupedGenres] = useState({});
  useEffect(async () => {
    const getSongsFromApi = await axios.get('/records',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    console.log(`mock once: ${getSongsFromApi}`);
    const getSongs = getSongsFromApi.data.data.map((song) => {
      const getCount = axios.get(`/records/${song.id}/likes`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      return getCount;
    });
    const returnedSongsWithLikes = await Promise.all(getSongs);
    const songsWithUpdatesFields = [];
    for (let i = 0; i < getSongsFromApi.data.data.length; i += 1) {
      const newSongObject = {
        ...getSongsFromApi.data.data[i],
        ...returnedSongsWithLikes[i].data.data,
      };
      songsWithUpdatesFields[i] = newSongObject;
    }
    setSongs(songsWithUpdatesFields);
  }, []);

  const groupByGenres = () => {
    // const newGroupedGenres = {};
    // console.log('songs', songs);
    const newGroupedGenres = songs.reduce((accumulator, song) => {
      if (accumulator[song.genre.name] === undefined) {
        accumulator[song.genre.name] = [];
        accumulator[song.genre.name].push(song);
      } else {
        const addSongs = accumulator[song.genre.name].push(song);
        return { ...accumulator, ...addSongs };
      }
      console.log('acc: ', accumulator);
      return accumulator;
    }, {});
    console.log('grouped generse:  ', newGroupedGenres);
    setGroupedGenres(newGroupedGenres);
  };
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/allsongs" exact>
          <AllSongs allsongs={songs} groupByGenres={groupByGenres} />
        </Route>
        <Route path="/allgenres" exact>
          <AllGenres groupedGenres={groupedGenres} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
