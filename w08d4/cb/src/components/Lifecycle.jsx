import React from 'react';

const Lifecycle = class extends React.Component {

  constructor(){
    super();  // best practice is to pass props into the React.Component constructor
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({ count: this.state.count + 1});
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  render(){

    console.log('this.props', this.props);

    return (
      <div className='Lifecycle'>
        <h3>Lifecycle</h3>
        <h4>count: {this.state.count}</h4>
        <button onClick={this.handleClick}>click me!</button>
      </div>
    );
  }

}

export default Lifecycle;