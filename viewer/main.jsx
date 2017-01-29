import React from 'react';
import ReactDOM from 'react-dom';
import Main from './app/index.jsx';
import {Provider} from 'react-redux'
import {store} from './app/reducers/index'

window.onload = function (){
  ReactDOM.render(
      <Provider store ={store}>
        <Main />
        </Provider> ,
     document.getElementById('app'));
}
