'use strict';
/**
 * Controls
 * @description
 * @author B.Podczerwinski
 */
let React = require('react'),
    StateTree = require('../StateTree'),
    ColorButton = require('./ColorButton');

let Controls = React.createClass({
    getDefaultProps: function() {
        return {
            colors: [
                "RED",
                "ORANGE",
                "YELLOW",
                "BLACK"
            ],
            shapes: [
                "CIRCLE",
                "SQUARE",
                "LINE",
                "RECTANGLE"
            ]
        }
    },
    getInitialState: function() {
        return {
            selectedColor: "None Selected"
        }
    },
    render () {
        var buttons = this.props.colors.map(function(item, index){
            return <ColorButton color={item}
                                key={index} />
        });

        StateTree.select(["view", "controls", "buttons"]).set(buttons);

        return (
            <section className="controls active">
                <div className="colors">
                    <div>Selected Color: <div className="selected-color">{ this.state.selectedColor }</div></div>
                    <div className="flex-container">
                        {buttons}
                    </div>
                </div>
                <div id="commands">
                </div>

            </section>
        );
    }
});

module.exports = Controls;

