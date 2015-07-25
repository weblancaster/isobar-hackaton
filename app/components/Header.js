'use strict';
/**
 * Header
 * @description
 * @author B.Podczerwinski
 */
let React = require('react'),
    StateTree = require('../StateTree'),
    Cursors = require('../AppCursors');

let Header = React.createClass({
    getDefaultProps: function() {
        return {
            appTitle: "",
            appSubtitle: "",
            version: NaN
        }
    },
    render () {
        let versionNumber = this.props.version.toFixed(2);
        return (
            <header>
                <h1>
                    { this.props.appTitle }
                    <sup>Version: { versionNumber }</sup>
                </h1>
                <h2>{ this.props.appSubtitle }</h2>
            </header>
        );
    }
});

module.exports = Header;

