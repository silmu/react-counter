import React, { Component } from 'react';

import Button from './Button';
import { addFifty } from '../add-fifty';

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
  addThirty = () => {
    this.setState({ counter: this.state.counter + 30 });
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
          <Button click={this.removeOne} name="-1" />
          <Button click={this.removeFive} name="-5" />
          <Button click={this.addThirty} name="+30" />

          <Button
            name="+ 50"
            click={() => {
              addFifty(this);
            }}
          />
        </div>
      </main>
    );
  }
}

export default Main;
