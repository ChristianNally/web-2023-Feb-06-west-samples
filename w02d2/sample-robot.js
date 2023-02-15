//                'Get Up', 4000,  walk
function doAction(name, duration, nextAction){
  console.log(`Starting ${name}: ${duration}`);
  setTimeout(() => {
    console.log(`Ending ${name}`);
    if (nextAction){
      nextAction();
    }
  }, duration);
  return;
}

//
// look
//
const look = () => {
  doAction('Look', 500, look);
  return;
};

//
// getUp
//
const getUp = () => {
  doAction('Get Up', 4000, walk);
};

//
// walk
//
const walk = () => {
  doAction('Walk', 6000, openTheDoor);
};

//
// openTheDoor
//
const openTheDoor = () => {
  doAction('Open The Door', 3000, walkThroughTheDoor);
};

//
// walkThroughTheDoor
//
const walkThroughTheDoor = () => {
  doAction('Walk Through The Door', 5000, null);
};

look();
getUp();

console.log("This is the end of the main thread.");
