import React from 'react';
import { FaHome } from 'react-icons/fa';

const Home = () => (
  <div className="homeContent">

    <h1 className="title">
      {' '}
      <FaHome />
      {' '}
      Welcome to our page
    </h1>
    {/* eslint-disable-next-line   max-len */}
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
    {/* eslint-disable-next-line  max-len */}
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

  </div>
);
export default Home;
