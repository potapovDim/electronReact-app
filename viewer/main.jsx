import React from 'react';
import ReactDOM from 'react-dom';
import routers from './routers'

window.onload = function () {
  ReactDOM.render(
      routers,
      document.getElementById('app'));
}
