'use strict';

let StateTree = require('./StateTree'),
    MainAppController = {

        deselectButtons: function() {
            let buttons = StateTree.select(["view", "controls", "buttons"]).get();
            for(var i = 0; i < buttons.length; i++) {
                var button = buttons[i];
                debugger;
                buttons[i].setState({
                    selected: false
                });
            }
        },

        initVoiceControl: function() {
            var recognizer = new webkitSpeechRecognition();
            recognizer.lang = "en";
            recognizer.continuous = true;

            var that = this;
            recognizer.onresult = function(event) {
                if (event.results.length > 0) {
                    var result = event.results[event.results.length-1];
                    if(result.isFinal) {
                        that.processVoiceCommand(result);

                    }
                }
            };
            recognizer.start();
        },

        processVoiceCommand: function(result) {
            //document.getElementById("words").innerHTML = result[0].transcript;
            var rawResult = result[0].transcript,
                resultArray = rawResult.split(" "),
                colorButtons = $(".btn.color");

            console.log(rawResult);
            $('#commands').text(rawResult);

            for(var i = 0; i < resultArray.length; i++) {
                var keyword = resultArray[i].toUpperCase();

                if(keyword === 'OPEN') {
                    $('.controls').addClass('active');
                }

                if(keyword === 'CLOSE') {
                    $('.controls').removeClass('active');
                }

                // Step through our color buttons and look for a match
                colorButtons.removeClass('selected');
                colorButtons.each(function(e){
                    var button = $(this);
                    if( button.hasClass(keyword)) {
                        button.addClass('selected');
                        $('.selected-color').text = keyword;
                    }
                });
            }
        }

    };

module.exports = MainAppController;