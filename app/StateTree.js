"use strict";
/**
 * StateTree
 * @description The source of truth for our application. Baobab: https://github.com/Yomguithereal/baobab
 * @author B.Podczerwinski
 */
let Baobab = require('baobab');

window.StateTree = new Baobab({
    model: {
        app: {
            title: "ISOBAR HACKATHON - 7/2015",
            subTitle: "TEAM AVIATO",
            version: 1.0
        }
    },
    view: {
        controls: {}
    }
});

module.exports = StateTree;