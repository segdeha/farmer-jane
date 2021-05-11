/**
 * Game controller
 * Game behaviors:
 * [ ] When a game is initiated, Farmer Jane is placed at the center of the field
 * [ ] With the game underway, plants start to grow at random spots in the field
 * [ ] Plants can be either crops or weeds
 * [ ] The game starts with 1 minute on the clock, counting down by the second
 * [ ] For each crop harvested, Farmer Jane earns $1
 * [ ] For each weed destroyed, time is extended by 10 seconds
 * [ ] With each additional weed, pace of new crops emerging slows
 * [ ] Once time gets to 0, game progresses to the next level
 * [ ] With each new level, tractor goes faster, plants emerge faster
 * [ ] Object of the game is to get as high a score as possible
 */

import Phaser from 'phaser'

class Game {
    constructor(field) {
        this.field = field
        this.removeButton()
        const config = {
            type: Phaser.AUTO,
            parent: 'field',
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
            },
            scene: {
                preload: this.preload,
                create: this.create,
                update: this.update,
            }
        }
        this.game = new Phaser.Game(config)
    }
    removeButton() {
        const button = this.field.querySelector('button')
        button.parentNode.removeChild(button)
    }
    preload() {
        this.load.setBaseURL('/')
        this.load.image('carrot', 'img/carrot.png')
        this.load.image('field', 'img/field.png')
        this.load.image('tractor', 'img/tractor.png')
        this.load.image('weed', 'img/weed.png')
        this.load.image('wheat', 'img/wheat.png')
    }
    create() {
        this.add.image(400, 300, 'field')
    }
    update() {}
}

/*
    function create ()
    {
        this.add.image(400, 300, 'sky');

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }
*/

export default Game
