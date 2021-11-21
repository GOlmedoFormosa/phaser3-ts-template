import Phaser from "phaser";

//Generic Phaser configuration
const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: 800,
  height: 600,
  scene: []
};

const game = new Phaser.Game(config);