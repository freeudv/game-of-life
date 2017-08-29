"use strict";

const readline = require("readline");
const createGame = require("./game");

let [, , size = 36, speed = 400] = process.argv;

let game = createGame({ size });

setInterval(() => {
  let output = game.play();

  readline.cursorTo(process.stdout, 0, 0);
  readline.clearScreenDown(process.stdout);
  process.stdout.write(output);
}, speed);
