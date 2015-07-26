'use strict';
/**
 * Controls
 * @description
 * @author B.Podczerwinski
 */
let React = require('react'),
    classSet = React.addons.classSet;

let ColorButton = React.createClass({
    getDefaultProps: function() {
        return {
            color: "BLACK"
        }
    },
    render () {
        let buttonClass = classSet({
            "btn": true,
            "color": true
        });

        return (
            <button className={buttonClass + " " + this.props.color}></button>
        );
    }
});

module.exports = ColorButton;

