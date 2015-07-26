// Canvas scope
(function(window, undefined) {
    window.Draw = {
        el: document.querySelector('#draw'),
        canvas: null,
        context: null,
        prevPosX: 0,
        prevPosY: 0,
        currPosX: 0,
        currPosY: 0,
        isMousePressed: false,
        strokeStyle: '#ffffff',

        start: function() {

            // create canvas
            this.canvas = document.createElement('canvas');
            this.canvas.width = window.screen.width;
            this.canvas.height = window.screen.height;

            // setup canvas
            this.context = this.canvas.getContext('2d');
            this.context.lineWidth = 5;
            this.context.strokeStyle = this.strokeStyle;


            this.el.appendChild(this.canvas);
        },

        line: function(x, y, isTouching) {

            if (isTouching) {
                this.context.beginPath();
                this.context.moveTo(this.prevPosX, this.prevPosY);
                this.context.lineTo(x, y);
                this.context.closePath();
                this.context.stroke();
            }

            this.prevPosX = x;
            this.prevPosY = y;

            console.log('DRAW', this.prevPosX + ' ' + this.prevPosY);
        },

        setColor: function(keyword) {
            this.strokeStyle = keyword;
        },

        resetColor: function() {
            this.strokeStyle = '#ffffff'
        },

        clear: function() {
            this.context.setTransform(1, 0, 0, 1, 0, 0);
            this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        },


        // Add listener prototype/test with mouse drawing
        addListeners: function() {
            var that = this;

            $(this.canvas).mousedown(function (e) {
                console.log('called A');
                this.isMousePressed = true;
                that.line(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
            });

            $(this.canvas).mousemove(function (e) {
                console.log('called B');
                if (this.isMousePressed) {
                    that.line(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
                }
            });

            $(this.canvas).mouseup(function (e) {
                this.isMousePressed = false;
            });

            $(this.canvas).mouseleave(function (e) {
                this.isMousePressed = false;
            });
        }


    };

    window.Draw.start();
    window.Draw.addListeners();
})(window);
