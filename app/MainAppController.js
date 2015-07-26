'use strict';

let MainAppController = {

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
            var rawResult = result[0].transcript,
                resultArray = rawResult.split(" "),
                colorButtons = $(".btn.color");

            $('#commands').text(rawResult);

            for(var i = 0; i < resultArray.length; i++) {
                var keyword = resultArray[i].toUpperCase();

                if(keyword === 'OPEN') {
                    $('.controls').addClass('active');
                }

                if(keyword === 'CLOSE') {
                    $('.controls').removeClass('active');
                }

                if(keyword === 'CLEAR') {
                    window.Draw.clear();
                }

                // Step through our color buttons and look for a match
                colorButtons.removeClass('selected');
                colorButtons.each(function(e){
                    var button = $(this);
                    if( button.hasClass(keyword) ) {
                        button.addClass('selected');
                        $('#selectedColor').text(keyword);
                        $('.app-base').css('backgroundColor', keyword);
                        window.Draw.setColor(keyword);
                    }
                });
            }
        }

    };

module.exports = MainAppController;