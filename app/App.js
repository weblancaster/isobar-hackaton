'use strict';
/**
 * App
 * @description The main app module that contains all of our views
 * @author B.Podczerwinski
 */
let React = require('react'),
    StateTree = require('./StateTree'),
    Cursors = require('./AppCursors'),
    Styles = require('./scss/master.scss'),
    Header = require('./components/Header');

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
        return (
            <section>
                <Header appTitle={this.props.appTitle}
                        appSubTitle={this.props.appSubtitle}
                        version={this.props.version} />
            </section>
        );
    }
});

module.exports = App;
