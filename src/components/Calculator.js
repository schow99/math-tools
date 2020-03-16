import React, { Component } from "react";
import Keypad from "./Keypad";
import Result from "./Result";


class Calculator extends Component {
  state = {
    equation: "",
    result: ""
  };

  onClick = button => {
    if (button == "=") {
      this.calculate();
    } else if (button == "C") {
      this.reset();
    } else if (button == "CE") {
      this.backspace();
    } else {
      this.setState({
        equation: this.state.equation + button
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.equation)
      });
    } catch (e) {
      this.setState({
        equation: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      equation: "",  
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      equation: this.state.equation.slice(0, -1)
    });
  };

  render() {
    return (
      <div>
        <Result result={this.state.result} equation = {this.state.equation}/>
        <Keypad onClick={this.onClick} />
      </div>
    );
  }
}
export default Calculator;
