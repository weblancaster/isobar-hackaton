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
        strokeStyle: 'white',

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
            this.context.strokeStyle = keyword.toLowerCase();

        },

        resetColor: function() {
            this.strokeStyle = '#ffffff';
        },

        clear: function() {
            this.context.setTransform(1, 0, 0, 1, 0, 0);
            this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        }

    };

    window.Draw.start();
})(window);
