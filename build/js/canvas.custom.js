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
        strokeStyle: 'red',

        start: function() {

            // create canvas
            this.canvas = document.createElement('canvas');
            this.canvas.width = $('#video').width();
            this.canvas.height = $('#video').height();

            // setup canvas
            this.context = this.canvas.getContext('2d');
            this.context.lineWidth = 5;
            this.context.strokeStyle = this.strokeStyle;


            this.el.appendChild(this.canvas);


            // test
            this.context.beginPath();
            this.context.moveTo(this.canvas.width / 2 , this.canvas.height / 2);
            this.context.lineTo(this.canvas.width, this.canvas.height / 2);
            this.context.moveTo(this.canvas.width / 2 , this.canvas.height / 2);
            this.context.lineTo(this.canvas.width / 2, this.canvas.height);
            this.context.closePath();
            this.context.stroke();

        },

        line: function(x, y, isTouching) {
            x = x * 1.3;
            y = y * 1.3;

            if(this.prevPosX === 0){
                this.prevPosX = x;
                this.prevPosY = y;
            }

            if (isTouching) {
                this.context.beginPath();
                this.context.moveTo(this.prevPosX, this.prevPosY);
                this.context.lineTo(x, y);
                this.context.closePath();
                this.context.stroke();
            }

            this.prevPosX = x;
            this.prevPosY = y;
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
                this.isMousePressed = true;
                that.line(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
            });

            $(this.canvas).mousemove(function (e) {
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
