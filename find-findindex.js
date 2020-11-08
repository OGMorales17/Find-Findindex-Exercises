/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. 
The function should return the first object with the key of username that matches the string passed to the function. 
If the object is not found, return undefined. 
*/

const users = [
    { username: 'mlewis' },
    { username: 'akagen' },
    { username: 'msmith' }
];

const findUserByUsername = (usersArray, username) => usersArray.find(user => user.username === username)

console.log(findUserByUsername(users, 'mlewis')) // {username: 'mlewis'}
console.log(findUserByUsername(users, 'taco')) // undefined

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. 
The function should remove the object from the array. If the object is not found, return undefined. 
*/

const removeUser = (usersArray, username) => {
    let foundIndex = usersArray.findIndex(user => user.username === username)
    if (foundIndex === -1) return;
    return usersArray.splice(foundIndex, 1)[0];
}

console.log(removeUser(users, 'akagen')) // {username: 'akagen'}
console.log(removeUser(users, 'akagen')) // undefined