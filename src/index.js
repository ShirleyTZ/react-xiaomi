import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Logomenu from './Logomenu';
import Article1 from './Article1';
import Picture from './Picture';
import Starproduct from './Starproduct';
import HomeAppliances from './HomeAppliances';

ReactDOM.render(
    <div>
        <div id="font"></div>
        <App />
        <Logomenu />
        <Article1 />
        <Picture />
        <Starproduct />
        <HomeAppliances />
        <div id="test"></div>
    </div>
  
,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
