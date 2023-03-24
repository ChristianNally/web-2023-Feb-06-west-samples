# W07D05 - Custom Hooks

### To Do
- [x] Custom Hooks
- [x] `useDocumentTitle`
- [x] `useMousePosition` (tests)
- [x] `useInput` (tests)
- [ ] `useRequest`
- [x] `useKeyPress`

### Custom Hook
* helper function that use hooks internally



const user = {
  username
};

useVisualMode
history: ['EMPTY', 'CREATE', 'SAVING', 'SHOW']
history: ['EMPTY', 'CREATE']
transition => move forward through time
back => move back through time

history.push('SAVING')
const newArr = [...history, 'SAVING']
newArr.push('SAVING');
setHistory(newArr);


```js
const [count] = useState(0);

setCount(count + 1); // 1
setCount((latestAndGreatest) => { return latestAndGreatest + 1 }); // 2
setCount((prev) => prev + 1); // 3
setCount(0 + 1); // 1
```









