// Leap motion scope
(function (window) {
    var riggedHandPlugin;
    Leap.loop({
        hand: function (hand) {
            var handMesh = hand.data('riggedHand.mesh');
            var screenPosition = handMesh.screenPosition(
                hand.palmPosition,
                riggedHandPlugin.camera
            );
            var fingers = hand.fingers;

            console.log('index finger', fingers[1]);
        }
    })
    .use('riggedHand')
    .use('handEntry')
    .on('handLost', function (hand) {

    });
    riggedHandPlugin = Leap.loopController.plugins.riggedHand;
})(window);