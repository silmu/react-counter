import React, { Component } from 'react';

import Button from './UI components/Button';
import Circle from './Circle';
// import { addFifty, removeFifty } from '../counter-functions';

//Main here is changed from function component to class component so number in circle would be re-rendering

class Main extends Component {
  state = {
    counter: 0,
  };

  //Event on click is handled by this method
  addFiveHandler = () => {
    this.setState({ counter: this.state.counter + 5 });
  };
  addOneHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  resetHandler = () => {
    this.setState({ counter: 0 });
  };
  removeOneHandler = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  removeFiveHandler = () => {
    this.setState({ counter: this.state.counter - 5 });
  };
  addThirtyHandler = () => {
    this.setState({ counter: this.state.counter + 30 });
  };

  render() {
    let className = 'even';
    if (this.state.counter % 2) {
      className = 'odd';
      console.log(className);
    }

    return (
      <main>
        <Circle counter={this.state.counter} className={className}></Circle>
        {/* <div className="circle">
          <div className="number">{this.state.counter}</div>
        </div>*/}
        <div className="buttons">
          {/* Buttons not as components */}
          {/* <button onClick={this.addFiveHandler}>+ 5</button>
          <button onClick={this.addOneHandler}>+ 1</button>
          <button onClick={this.reset}>Reset</button> */}

          {/* Buttons as components. The first button has value as example */}
          <Button click={this.addFiveHandler} value="+ 5"></Button>
          <Button click={this.addOneHandler}>+ 1</Button>
          <Button click={this.resetHandler}>Reset</Button>
          <Button click={this.removeOneHandler}>- 1</Button>
          <Button click={this.removeFiveHandler}>- 5</Button>
          <Button click={this.addThirtyHandler}>+ 30</Button>

          {/* Buttons as components with function outside of Main */}
          {/* <Button
            name="+ 50"
            click={() => {
              addFifty(this);
            }}
          />
          <Button
            name="- 50"
            click={() => {
              removeFifty(this);
            }}
          ></Button> */}
        </div>
      </main>
    );
  }
}

export default Main;
