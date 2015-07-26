/**
 * ControlActions
 * @description Manages interaction between the StateTree and the controls
 * @author B.Podczerwinski
 */
'use strict';

let ControlActions = {
    /**
     * buildFloorButtons
     * @param numFloors
     * @returns {Array}
     */
    setSelectedColor: function(color) {
        StateTree.select(AppCursors.selectedColor).set(color);
    }
};

module.exports = ControlActions;