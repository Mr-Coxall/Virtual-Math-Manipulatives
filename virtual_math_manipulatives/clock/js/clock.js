/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Phaser3 scene in a single file

const params = new URLSearchParams(document.location.search);
const hours = params.get('h');
const minutes = params.get('m');

const gameScene = new Phaser.Scene('Game');

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scene: {
    init,
    preload,
    create,
    update,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  // set background color
  backgroundColor: 0xffffff,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    //autoCenter: Phaser.Scale.CENTER_BOTH
  }
}
const phaserScene = new Phaser.Game(config)


function init () {
  console.log(hours)

}
function preload () {
  console.log('Clock Scene')
}

function create (data) {
  console.log(minutes)
}

function update (time, delta) {
  if (time < 3000) {
    console.log('Counting')
  }
}