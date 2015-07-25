'use strict';
/**
 * App
 * @description The main app module that contains all of our views
 * @author B.Podczerwinski
 */
let React = require('react'),
    StateTree = require('./StateTree'),
    Cursors = require('./AppCursors'),
    Styles = require('./scss/master.scss');

let App = React.createClass({
    mixins: [
        StateTree.mixin,
        React.addons.PureRenderMixin
    ],
    cursors: {
        app: Cursors.app
    },
    getDefaultProps: function() {
        return {
            appTitle: StateTree.select(Cursors['app']).get('title'),
            appSubtitle: StateTree.select(Cursors['app']).get('subTitle'),
            version: StateTree.select(Cursors['app']).get('version')
        }
    },
    render () {
        let versionNumber = this.props.version.toFixed(2);
        return (
            <section className="app-base">
                <h1>
                    { this.props.appTitle }
                    <sup>Version: { versionNumber }</sup>
                </h1>
                <h2>{ this.props.appSubtitle }</h2>
            </section>
        );
    }
});

module.exports = App;
