import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
require('./style.css');

render(<App />, document.getElementById('app'));
