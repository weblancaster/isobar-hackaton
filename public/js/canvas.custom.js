// Canvas scope
(function(window, undefined) {
    window.Draw = {
        el: document.querySelector('draw'),
        canvas: null,
        context: null,

        createCanvas: function() {

            // create canvas
            this.canvas = document.createElement('canvas');
            this.canvas.width = this.canvas.clientWidth;
            this.canvas.height = this.canvas.clientHeight;

            // setup canvas
            this.context = this.canvas.getContext('2d');
            this.context.lineWidth = 5;
            this.context.strokeStyle = '#fff';

            //this.el.textContent = this.canvas;
        },

        drawLine: function(x, y) {
            this.context.beginPath();
            this.context.lineTo(x, y);
            this.context.stroke();
        }


    };

    window.Draw.createCanvas();
})(window);