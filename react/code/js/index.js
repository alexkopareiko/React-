//Redux - предсказуемый контейнер состояний для
//Java-script приложений

//React - view
//Redux - хранение данных и работа с ними

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
//  import './index.css';

const initialState = [
  'Smells like spirit',
  'Enter Sandman'
];

function playlist(state = initialState, action) {
  //console.log(action);
  if (action.type === 'ADD_TRACK') {
    return [
      ...state, //спредом добавляется action.payload, добавить значение в массив и вернуть новый массив
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// import {createStore} from 'redux';
//
//
// function playlist(state = [], action) {
//   //console.log(action);
//   if (action.type === 'ADD_TRACK') {
//     return [
//       ...state, //спредом добавляется action.payload, добавить значение в массив и вернуть новый массив
//       action.payload
//     ];
//   }
//   return state;
// }
//
// //хранилище всех данных в приложении
// //подаем на вход функцию, которая будет изменять store
// const store = createStore(playlist);
//
// const addTrackBtn = document.querySelectorAll('.addTrack')[0]; //т.к. это массив, нам нужен 1-й элемент
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];
//
//
// //console.log(store.getState()); //выводит в браузер состояния store
//
// store.subscribe(() => {
//   console.log('subscribe', store.getState()); //как только поменяется store, вывод в консоле
//   list.innerHTML = ''; //очистить list
//   trackInput.value = ''; //очистить input
//   store.getState().forEach(track => {
//     const li = document.createElement('li');
//     li.textContent = track; // запись названия трека
//     list.appendChild(li); // прикрепляем
//
//   })
// })
//
// //dispatch выстреливает action, единственный способ поменять значение store
//
//
//
// addTrackBtn.addEventListener('click', () => { //второй аргумент - функция
//   const trackName = trackInput.value;
//   //console.log('trackName', trackName);
//   store.dispatch({ type: 'ADD_TRACK', payload: trackName});
// });
