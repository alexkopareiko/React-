import {combineReducers} from 'redux';
import ContactReducers from './contact';
import ActiveContact from './contact-active';

const allReducers = combineReducers ({
  cars: ContactReducers,
  active: ActiveContact
});

export default allReducers;
