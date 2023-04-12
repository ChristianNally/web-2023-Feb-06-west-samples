"use strict";
const user = {
    id: 4,
    username: 'jstamos',
    password: '1234',
    pet: {
        breed: 'golden retriever',
        weight: 42,
        goForAWalk: (distance, trailName) => { return true; }
    }
};
const users = [];
users.push(user);
