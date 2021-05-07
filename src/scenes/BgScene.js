import 'phaser';

export default class BgScene extends Phaser.Scene {
  constructor() {
    super('BgScene');
  }

  preload() {
    // Preload Sprites
    // << LOAD SPRITE HERE >>
    // this.load.image("sky", "assets/backgrounds/sky.png");
    // this.load.image("fullBlastLogo", "assets/backgrounds/fullBlastLogo.png")
    this.load.image("sky", "assets/backgrounds/sky-juan-test.png");
    this.load.image("mountains", "assets/backgrounds/mountains-juan-test.png");
    this.load.image("plateau", "assets/backgrounds/plateau-juan-test.png");
    this.load.image("plants", "assets/backgrounds/plant-juan-test.png")

  }

  create() {
    // Create Sprites
    // << CREATE SPRITE HERE >>
    // this.add.image(-160, 0, 'sky').setOrigin(0).setScale(.5);
    // this.add.image(380,80,'fullBlastLogo').setScale(5)
    this.add.image(400, 260, 'sky').setOrigin(0.5).setScale(.65);
    this.add.image(0, 600, 'mountains').setOrigin(0,1).setScale(0.5)
    this.add.image(0, 600, 'plateau').setOrigin(0,1).setScale(0.5)
    this.add.image(0, 600, 'plants').setOrigin(0,1).setScale(0.5)

  }
}
