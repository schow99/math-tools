import React, { Component } from "react";

class Binary extends Component {
  state = {
    value: 0,
    binary: 0
  };

  handleChange = e => {
    e.preventDefault();
    const num = e.target.value;
    const binary = (num >>> 0).toString(2);
    this.setState({ value: num, binary });
  };
  render() {
    return (
      <div style = {divStyle}>
        <form id="numberForm" onChange={this.handleChange}>
          <h1 style = {headerStyle} >Enter a number</h1>
          <input type="number" style = {binaryStyle}></input>
          <br />
        </form><br/>
        <h1 style = {headerStyle}>In Binary</h1>
        <div style={binaryStyle}>{this.state.binary}</div>
      </div>
    );
  }
}

export default Binary;

const binaryStyle = {
  marginTop: "20px",
  marginLeft: "20px",
  background: "#fff",
  width: "1200px",
  height: "50px",
  border: "1px solid black",
  borderRadius: "15px",
  textAlign: "center",
  fontSize: "34px"
};
const headerStyle = {
    textAlign: 'center'
}
const divStyle = {
    background: '#969696', 
    marginLeft: '20px',
    width: '1240px', 
    height: '400px', 
    borderRadius: '15px'
}