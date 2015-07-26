'use strict';

var MainAppController = {

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
                console.log('Voice activated: ', keyword);

                if(keyword === 'VIDEO') {
                    if ( $('.demo-frame').hasClass('hidden') ) {
                        $('.demo-frame').show();
                    } else {
                        $('.demo-frame').hide();
                        window.Draw.setColor('black');
                        $('.app-base').css('backgroundColor', 'white');
                    }
                    $('.demo-frame').toggleClass('hidden');
                }

                if(keyword === 'OPEN') {
                    $('.controls').addClass('active');
                }

                if(keyword === 'CLOSE') {
                    $('.controls').removeClass('active');
                }

                if(keyword === 'CLEAR') {
                    window.Draw.clear();
                }

                if(keyword === 'PRINT') {
                    window.print();
                }

                // Step through our color buttons and look for a match
                colorButtons.removeClass('selected');
                colorButtons.each(function(e){
                    var button = $(this);

                    if( ! button.hasClass(keyword) ) {
                        return;
                    }

                    button.addClass('selected');
                    $('#selectedColor').text(keyword);

                    if ( ! $('.demo-frame').hasClass('hidden') ) {
                        $('.app-base').css('backgroundColor', keyword);
                    }

                    window.Draw.setColor(keyword);

                });
            }
        }

    };

module.exports = MainAppController;