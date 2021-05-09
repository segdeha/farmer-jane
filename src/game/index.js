/**
 * Game controller
 * Game behaviors:
 * - When a game is initiated, Farmer Jane is placed at the center of the field
 * - With the game underway, plants start to grow at random spots in the field
 * - Plants can be either crops or weeds
 * - The game starts with 1 minute on the clock, counting down by the second
 * - For each crop harvested, Farmer Jane earns $1
 * - For each weed destroyed, time is extended by 10 seconds
 * - With each additional weed, pace of new crops emerging slows
 * - Once time gets to 0, game progresses to the next level
 * - With each new level, tractor goes faster, plants emerge faster
 * - Object of the game is to get as high a score as possible
 */

import 'phaser'

class Game {
  constructor(field) {
    this.field = field
  }
}

export default Game
