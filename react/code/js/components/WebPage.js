import React from 'react';
import ContactList from '../containers/contact-list';
import Details from '../containers/details';
//можно добавить css../../

const WebPage = () => (
  <div>
    <h2>Contacts:</h2>
    <ContactList />
    <hr />
    <h3>Details:</h3>
    <Details />
  </div>
);

export default WebPage;
