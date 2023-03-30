import React from 'react';

const Child = class extends React.Component {

  constructor(props){
    super(props);  // best practice is to pass props into the React.Component constructor
    this.state = {
      internalCount: this.props.count * 2
    };
  }

  render(){

    console.log('this.props', this.props);

    return (
      <div className='child'>
        <h3>Child</h3>
        <h4>InternalCount: {this.state.internalCount}</h4>
        <h4>Count:{this.props.count}</h4>
      </div>
    );
  }

}

export default Child;