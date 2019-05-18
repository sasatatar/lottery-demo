import {Controller} from "cx/ui";
import casual from "casual-browserify";
import { MIN_LOTTERY_VALUE, MAX_LOTTERY_VALUE } from "../users/api";
import { lotteryGenerator } from "../../util";

export const getLotteryController = () => {

    let getRandomBall = lotteryGenerator(MAX_LOTTERY_VALUE);

    return class extends Controller {
        onInit() {
            this.store.init("$page.numbers", []);
        }
        
        drawNumber() {
            this.store.update("$page.numbers", (numbers) => {

                return [
                    ...numbers,
                    {
                        id: numbers.length,
                        value: getRandomBall()
                    }
                ];
            })
        }

        reset() {
            this.store.set("$page.numbers", []);
            getRandomBall = lotteryGenerator(MAX_LOTTERY_VALUE);
        }
    }
}