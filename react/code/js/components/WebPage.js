import React from 'react';
import CarsList from '../containers/car-list';
//можно добавить css../../

const WebPage = () => (
  <div>
    <h2>Cars:</h2>
    <CarsList />
    <hr />
    <h3>Details:</h3>
  </div>
);

export default WebPage;
