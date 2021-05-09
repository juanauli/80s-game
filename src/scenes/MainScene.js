import 'phaser'
import SynthwaveScene from './SynthwaveScene';
import NeonAlleyScene from './NeonAlleyScene';
import MoonlightScene from './MoonlightScene';
import SkyLineScene from './SkyLineScene';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  create() {
    // Launch scene here
    this.scene.launch('SynthwaveScene');
    // this.scene.launch('NeonAlleyScene');
    // this.scene.launch('MoonlightScene');
    // this.scene.launch('SkyLineScene');

  }
}
