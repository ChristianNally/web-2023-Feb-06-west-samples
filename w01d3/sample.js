// let number = 5;

// let number2 = 5 + 3;

// let isAwesome = true;

// let firstName = 'Nally';

// let instructor = firstName;

// function doStuff(num){
//   // this function does some stuff
//   let otherNum = num * 2;
// }

// number = 10;



// let voterOneName = 'Sandra Day Oconner';
// let voterTwoName = 'Billy Bones';
// let voterThreeName = 'Monkey Fuzz';

// let voterOneAge = 77;
// let voterTwoBirthday = 'March 15th, 1665';
// const voter3Age = 33;

// let voterOneDidVote = true;
// let voter2DidVote = false;

// sample voter
const voterOne = {
  name: 'Neil Armstrong',
  birthday: 'Aug 5, 1930',
  didVote: true
};

const voterTwo = {
  name: 'Mickey Mouse',
  birthday: 'Nov 18, 1928',
  didVote: false
};

// // list of Voters
// const listOfVoters = [voterOne, voterTwo];

// for (let ii = 0; ii < listOfVoters.length; ii++){
//   console.log('voter name', listOfVoters[ii].name);
// }

// const nameOfProperty = 'didVote';

// console.log('voterOne.didVote', voterOne.didVote);
// console.log("voterOne['didVote']", voterOne['didVote']);
// console.log("voterOne[nameOfProperty]", voterOne[nameOfProperty]);
// console.log("voterOne.nameOfProperty", voterOne.nameOfProperty);

let value = 3;

function timesTen(num){
  num = num + 1;
  console.log(`input times ten is: ${num*10}`);
}

timesTen(value);
console.log(`my number is ${value}`);


function printVoterAsHTML(voter){
  console.log(`<h2>${voter.name}</h2>`);
  console.log(`<div class="birthday">${voter.birthday}</div>`);
  voter.didVote = true;
  console.log(`<div class="vote">${voter.didVote}</div>`);
}

// printVoterAsHTML(voterOne);

printVoterAsHTML(voterTwo);
console.log('voterTwo', voterTwo);




const voterThree = {
  name: 'Margaret Hamilton',
  birthday: 'Aug 17, 1936',
  didVote: true,
  log: function(){
    console.log(`name: ${this.name}`);
  }
};

voterThree.log();


for (let key in voterThree){
  console.log('key', key);
  console.log('voterThree[key]', voterThree[key]);  
}
