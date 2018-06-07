import React from 'react';
import CarsList from '../containers/car-list';
import Details from '../containers/details';
//можно добавить css../../

const WebPage = () => (
  <div>
    <h2>Cars:</h2>
    <CarsList />
    <hr />
    <h3>Details:</h3>
    <Details />
  </div>
);

export default WebPage;
