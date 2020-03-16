import React, { Component } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import {Route} from "react-router-dom";
import Binary from "./components/Binary";

class App extends Component {
  state = {
    result: ""
  };

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/(about|)"  render={props => <p style = {{padding: '0px 7px'}}>Website for basic calculator and a binary converter using React framework.</p>} />
        <Route exact path="/calculator" component ={Calculator} />
        <Route exact path="/binary-converter" component = {Binary} />
      </div>
    );
  }
}
export default App;
