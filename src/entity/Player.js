import 'phaser';
import FgScene from '../scenes/FgScene';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enable(this);
    this.facingLeft = false;
    this.armed = false;
    // << INITIALIZE PLAYER ATTRIBUTES HERE >>
  }

  updateMovement(cursors) {
    // Move left
    const cam = this.scene.cameras.main;
    if (cursors.left.isDown) {
      if (!this.facingLeft) {
        this.flipX = !this.flipX;
        this.facingLeft = true;

      }
      this.setVelocityX(-360);
      if (this.body.touching.down) {
        this.play('run', true);
      }
    }
    // Move right
    else if (cursors.right.isDown) {
      if (this.facingLeft) {
        this.flipX = !this.flipX;
        this.facingLeft = false;
      }
      this.setVelocityX(360);

      if (this.body.touching.down) {
        this.play('run', true);
      }
    }
    // Neutral (no movement)
    else {
      this.setVelocityX(0);
      // Whenever Josh is not moving, use the idleUnarmed animation
      if (!this.armed) {
        this.anims.play('idleUnarmed');
      } else {
        this.anims.play('idleArmed');
      }
    }
  }

  // Check which controller button is being pushed and execute movement & animation
  update(cursors, jumpSound) {
    // << INSERT CODE HERE >>
    this.updateMovement(cursors)
    this.updateJump(cursors, jumpSound)
    this.updateInAir();
  }

  updateJump(cursors, jumpSound) {
    if (cursors.up.isDown && this.body.touching.down) {
      this.setVelocityY(-800);
      jumpSound.play()
    }
  }

  updateInAir() {
    if (!this.body.touching.down) {
      this.play('jump');
    }
  }
}
