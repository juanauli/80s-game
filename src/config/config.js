export default {
  type: Phaser.AUTO,  // Specify the underlying browser rendering engine (AUTO, CANVAS, WEBGL)
                      // AUTO will attempt to use WEBGL, but if not available it'll default to CANVAS
  width: 800,   // Game width in pixels
  height: 600,  // Game height in pixels
  // This option is to turn off the default behavior of images being automatically sharpened.
  // Since we'll be using pixel art, we want every beautiful pixel untouched!
  render: {
    pixelArt: true,
  },
  //  We will be expanding physics later
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1500 },  // Game objects will be pulled down along the y-axis
                        // The number 1500 is arbitrary. The higher, the stronger the pull.
                        // A negative value will pull game objects up along the y-axis
      debug: false,     // Whether physics engine should run in debug mode
    }
  }
}
