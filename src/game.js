import Paddle from '/src/paddle.js';
import InputHandler from '/src/input.js';
import Ball from '/src/ball.js';


export default class Game {

    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

    }

    start() {
        let ball = new Ball(this);
        let paddle = new Paddle(this);


        new InputHandler(paddle);
        paddle.draw(ctx);
    }

}