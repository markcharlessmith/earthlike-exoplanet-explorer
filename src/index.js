// import React from 'react';
const react = require('react');
// import ReactDOM from 'react-dom';
const { render } = require('react-dom');
// import { render } from 'react-dom';
const App = require('../components/App.jsx');
// import App from '../components/App.jsx';
import styles from './styles.scss';

render(<App />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
