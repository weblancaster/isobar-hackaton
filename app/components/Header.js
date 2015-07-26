'use strict';
/**
 * Header
 * @description
 * @author B.Podczerwinski
 */
var React = require('react');

var Header = React.createClass({
    getDefaultProps: function() {
        return {
            appTitle: "ISOBAR HACKATHON",
            appSubtitle: "TEAM AVIATO",
            version: 1.00
        }
    },
    render () {
        return (
            <header>
                <h1>
                    { this.props.appTitle }
                    <sup>Version: { this.props.versionNumber }</sup>
                </h1>
                <h2>{ this.props.appSubtitle }</h2>
            </header>
        );
    }
});

module.exports = Header;

