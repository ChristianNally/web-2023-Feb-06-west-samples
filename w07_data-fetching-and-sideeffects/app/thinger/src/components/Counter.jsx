import { useState, useEffect } from "react";

const Counter = (props) => {

  console.log('Counter component props', props);

  const [count, setCount] = useState(0);
  const [text, setText] = useState('money fuzz');

  useEffect(() => { // document title
    console.log('i am setting the title');
    document.title = `${count}:${text}`;
  }, [count, text]);

  // useEffect(() => {
  //   console.log('setting interval');
  //   setInterval(()=>{
  //     console.log('Ping!')
  //   }, 1000); 
  // }); // run this callback on EVERY render

  useEffect(() => {
    console.log('setting interval');
    const myInterval = setInterval(()=>{
      console.log('Ping!')
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, []); // run this callback ONCE

  const clickHelper = (event) => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  
  const textChanged = (event) => {
    setText((prev) => {
      return event.target.value;
    });
  };

  return (
    <div>
      <h1>Counter</h1>
      <div className="the-count">{count}</div>
      <button onClick={clickHelper}>Increment</button>
      <label>{text}</label>
      <input value={text} onChange={textChanged}/>
    </div>
  );
};

export default Counter;
