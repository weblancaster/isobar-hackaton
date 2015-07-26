/**
 *
 * AppCursors
 * @description Pointers into our StateTree
 * @author B.Podczerwinski
 */
let AppCursors = {

    /**
     * MODEL CURSORS
     */
    model: ['model'],
    app: ['model', 'app'],

    /**
     * VIEW CURSORS
     */
    view: ['view'],
    controls: ['view', 'controls'],
    selectedColor: ['view', 'controls', 'selectedColor']
};

module.exports = AppCursors;
