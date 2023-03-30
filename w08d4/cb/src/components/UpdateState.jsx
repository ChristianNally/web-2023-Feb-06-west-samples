import React from 'react';

const UpdateState = class extends React.Component {

  constructor(){
    super();
    this.state = {
      count: 0,
      message: 'this is the default message'
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount(){
//    this.state = {}; // NO GOOD!
    this.setState({ count: this.state.count + 1});
  }

  render(){
    return (
      <div>
        <h2>An UpdateState Component</h2>
        <h4>Count: {this.state.count}</h4>
        <button onClick={this.incrementCount}>Plus 1!</button>
        <div>
          { this.state.message }
        </div>
      </div>
    );
  }

}

export default UpdateState;