/* eslint-disable no-await-in-loop */
import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

const Home = () => (
  <div className="home-container">
    <p>:((</p>
    <p>seems a bit empty in here...</p>
    <Link to="/allsongs">
      <Button data-testid="sync-button" type="button" text="sync" onClick={() => {}}><b>sync</b></Button>
    </Link>
  </div>
);

export default Home;
