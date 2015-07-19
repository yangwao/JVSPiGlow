// Define dependencies.
var PiGlow = require('../index.js');

// Reset the PiGlow (turns all LEDs off).
PiGlow.reset();

// Create a fade effect for all LEDs.
var fadeEffect = PiGlow.LEDCollection(PiGlow.ALL_LEDS).effect({
    mode: PiGlow.EFFECT_FADE,
    targetBrightness: 255,
    duration: 5000
});

fadeEffect.on('finished', function() {
    // When the fade effect finishes, kill the Python process used by JVSPiGlow and reset the PiGlow.
    PiGlow.kill(true);
});

// Start the fade effect.
fadeEffect.start();
