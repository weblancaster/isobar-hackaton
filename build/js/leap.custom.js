// Leap motion scope
(function (window) {

    var _frame = null;

// Get the canvas width and height
    var element = document.querySelector('#video');
    console.log("video: " + element.videoWidth);
    var width =  window.screen.width - element.videoWidth;
    var height = window.screen.height;
// Name some colors
    var red = '#F00', green = '#0F0', blue = '#00F', purple = '#A0F';
// Create an array to save circle properties
    var circles = [];

// Draw a circle with the given parameters:
//   center: float array [x, y]
//   radius: float > 0
//   color: string "#RGB"
//   fill: boolean
    function drawCircle(center, radius, color, fill) {
        // Make an closed arc with a complete rotation
        ctx.beginPath();
        ctx.arc(center[0], center[1], radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.lineWidth = 4;
        // Choose whether to fill or outline the circle
        if (fill) {
            ctx.fillStyle = color;
            ctx.fill();
        } else {
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }

// Transform Leap coordinates to canvas scene coordinates
    function leapToScene(leapPos) {
        //var x = position[0];
        //var y = position[1] - 150;
        //
        //console.log("x: " + x + " y: " + y);
        //// Shift the Leap origin to the canvas's bottom center and invert the y-axis
        //return [width / 2 + x, (height / 2) - (y / 2)];

        // Gets the interaction box of the current frame
        var iBox = _frame.interactionBox;

        // Gets the left border and top border of the box
        // In order to convert the position to the proper
        // location for the canvas
        var left = iBox.center[0] - iBox.size[0]/2;
        var top = iBox.center[1] + iBox.size[1]/2;

        // Takes our leap coordinates, and changes them so
        // that the origin is in the top left corner
        var x = leapPos[0] - left;
        var y = leapPos[1] - top;

        // Divides the position by the size of the box
        // so that x and y values will range from 0 to 1
        // as they lay within the interaction box
        x /= iBox.size[0];
        y /= iBox.size[1];

        // Uses the height and width of the canvas to scale
        // the x and y coordinates in a way that they
        // take up the entire canvas
        x *= width;
        y *= height;

        // Returns the values, making sure to negate the sign
        // of the y coordinate, because the y basis in canvas
        // points down instead of up

        return [ x , -y ];
    }

// Create a Leap controller to access frame data
    var controller = new Leap.Controller();

// Register a callback to process frame data
    controller.on('frame', function (frame) {

        _frame = frame;

        if ( ! frame.fingers.length > 0 ) {
            return;
        }

        var finger = frame.fingers[1];

        // Calculate the circle center and radius
        var center = leapToScene(finger.tipPosition);
        if ( frame.pointables[1].length > 0 &&
            frame.pointables[1].touchDistance < 0.9 &&
            frame.pointables[1].touchDistance > -0.4 ) {
            window.Draw.line(center[0], center[1], true);
        } else {
            window.Draw.line(center[0], center[1], false);
        }
    });

// Connect the controller to start receiving data
    controller.connect();

})(window);
