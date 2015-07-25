'use strict';
/**
 * App
 * @description The main app module that contains all of our views
 * @author B.Podczerwinski
 */
let React = require('react');

let App = React.createClass({
    getDefaultProps: function() {
        return {
            appTitle: "Team Ram-Rod",
            appSubtitle: "Chicago Hackathon",
            version: "1.0"
        }
    },
    render () {
        return (
            <section className="app-base">
                <h1>ISOBAR HACKATHON</h1>
                <p>HELLO WORLD!!!!!</p>
            </section>
        );
    }
});

module.exports = App;
