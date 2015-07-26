'use strict';
/**
 * App
 * @description The main app module that contains all of our views
 * @author B.Podczerwinski
 */
let React = require('react'),
    Styles = require('./scss/master.scss'),
    Controls = require('./components/Controls'),
    MainAppController = require('./MainAppController');

let App = React.createClass({
    componentDidMount: function() {
        MainAppController.initVoiceControl();
    },
    render () {
        return (
            <section>
                <Controls />
            </section>
        );
    }
});

module.exports = App;
