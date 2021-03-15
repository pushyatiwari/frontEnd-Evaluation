import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../pages/home/Home';
import AllSongs from '../pages/allSongs/AllSongs';
import NavBar from '../components/navbar/Navbar';
import { token } from '../constants';

const App = () => {
  const [songs, setSongs] = useState([]);
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

  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/allsongs" exact>
          <AllSongs allsongs={songs} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
