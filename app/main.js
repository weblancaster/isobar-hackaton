'use strict';
/**
 * Main.js
 * @description Entry point of our application
 * @author B.Podczerwinski
 */
let React = require('react'),
    App = require('./App');

function init() {
    React.render(<App />, document.getElementById('App'));
}

module.exports = init();