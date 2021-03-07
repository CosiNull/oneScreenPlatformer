let soundPaths = {
  click: "./sounds/click.wav",
  impact: "./sounds/impact.wav",
  jump: "./sounds/jump.wav",
  lava: "./sounds/lava.wav",
  miniSwitch: "./sounds/miniSwitch.wav",
  step: "./sounds/step.wav",
  switch: "./sounds/switch.wav",
  win: "./sounds/win.wav",
};

let playSound = (path) => {
  let myAudio = new Audio();
  myAudio.src = path;
  myAudio.play();
};

let miniSwitchActivate = false;
