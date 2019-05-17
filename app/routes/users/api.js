import uid from "uid";
import casual from 'casual-browserify';
export const MAX_LOTTERY_VALUE = 48;
export const MIN_LOTTERY_VALUE = 0;

//Fake RESTful API

// let data = Array.from({ length: 20 }, (_, i) => ({
//     id: uid(),
//     name: casual.full_name,
//     numbers: getFiveNumbers()
// }));
let data = [];

function getFiveNumbers() {
    let numbers = [];
    while (numbers.length < 5) {
        let num = casual.integer(MIN_LOTTERY_VALUE, MAX_LOTTERY_VALUE);
        if (!numbers.includes(num)) numbers.push(num);
    }
    return numbers.map((n, i) => ({ id: i, value: n}));
}

export function queryUsers(q) {
    return new Promise(resolve => {
        let result = data.filter(user => !q || user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);
        //simulate server response delay
        setTimeout(() => resolve(result), 100);
    });
}

export function getUser(id) {
    return new Promise(resolve => {
        let index = data.findIndex(u => u.id == id);
        resolve(data[index]);
    });
}

export function putUser(id, user) {
    return new Promise(resolve => {
        let index = data.findIndex(u => u.id == id);
        if (index === -1) throw new Error("User not found!");
        let result = (data[index] = {
            ...data[index],
            ...user,
            id: id
        });
        resolve(result);
    });
}

export function postUser(user) {
    return new Promise(resolve => {
        let id = data.length + 1;
        let result = {
            ...user,
            id: uid()
        };
        data.push(result);
        resolve(result);
    });
}

export function deleteUser(id) {
    return new Promise(resolve => {
        data = data.filter(u => u.id != id);
        resolve();
    });
}
