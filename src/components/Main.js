import React, { Component } from 'react';

// import Button from './Button';
// import addFive from '../add-five';

// const addThree = () => {
//   console.log('Add 3 is clicked');
// };

//Main here is changed from function component to class component so number in circle would be re-rendering

class Main extends Component {
  state = {
    counter: 0,
  };

  //Event on click is handled by this method
  addFive = () => {
    this.setState({ counter: this.state.counter + 5 });
  };
  addOne = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  reset = () => {
    this.setState({ counter: 0 });
  };
  removeOne = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  removeFive = () => {
    this.setState({ counter: this.state.counter - 5 });
  };

  render() {
    return (
      <main>
        <div className="circle">
          <div className="number">{this.state.counter}</div>
        </div>
        <div className="buttons">
          <button onClick={this.addFive}>+ 5</button>
          <button onClick={this.addOne}>+ 1</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.removeOne}>- 1</button>
          <button onClick={this.removeFive}>-5</button>

          {/* <Button name="+ 5" click={addFive} counter={this.state.counter} /> */}
          {/* <Button name="Reset" />
          <Button name="- 1" />
          <Button name="- 5" /> */}
        </div>
      </main>
    );
  }
}

export default Main;
