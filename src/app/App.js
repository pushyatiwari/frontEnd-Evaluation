import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../pages/home/Home';
import AllSongs from '../pages/allSongs/AllSongs';
import NavBar from '../components/navbar/Navbar';

const App = () => {
  const [songs, setSongs] = useState([]);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5OWVkZDIyMi0xYzRjLTQ0ZTEtYTlmYi0wZjAwMTllYTk3MmYiLCJuYW1lIjoiUHVzaHlhIiwicm9sZSI6MCwic3ViamVjdCI6IlRlY2ggVW5pdiAyMDIxIiwiZWFzdGVyX2VnZyI6Ikdvb2QgbHVjayEiLCJhdWQiOiJtdXNpY3JlY29yZHMudGVjaHVuaXYuY29tIiwibmJmIjoxNjE1Nzg0NDk0LCJleHAiOjE2MTgzNzY0OTQsImlhdCI6MTYxNTc4NDQ5NCwiaXNzIjoiTXVzaWMgUmVjb3JkcyJ9.GIjkdAbQaZH0socKaGridkVg6rPxmjihnELQ92SVKEI';

  useEffect(async () => {
    const getSongsFromApi = await axios.get('/records',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
