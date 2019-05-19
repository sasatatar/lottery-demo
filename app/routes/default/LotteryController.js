import {Controller} from "cx/ui";
import { lotteryGenerator } from "../../util/lotteryGenerator";

export const getLotteryController = () => {

    let getRandomBall = lotteryGenerator();

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
            getRandomBall = lotteryGenerator();
        }
    }
}