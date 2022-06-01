import React from "react";
import ReactDOM from "react-dom/client";
import Phaser from "phaser";

import { App } from "./App";
import { Preloader } from "./scene/Preloader";
import { Start } from "./scene/Start";
import { Runner } from "./scene/Runner";

const squareSize: number = 400; // Math.min(window.innerHeight, window.innerWidth) * 0.9;

const runnerConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: squareSize,
  height: squareSize,
  parent: "game",
  scene: [Preloader, Start, Runner],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  render: {
    pixelArt: true,
    antialias: false,
  },
  scale: {
    // mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    fullscreenTarget: "game",
    expandParent: false,
  },
};

const game = new Phaser.Game(runnerConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
