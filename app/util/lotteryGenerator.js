import { MAX_LOTTERY_VALUE } from "../constants";

export function lotteryGenerator() {
    
    let balls = Array.from({length: MAX_LOTTERY_VALUE }).map((_, i) => i+1);

    return function getRandomBall() {
        let index = getRandomInt(balls.length);
        let value = balls[index];
        balls = [...balls.slice(0, index), ...balls.slice(index+1)];
        return value;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
