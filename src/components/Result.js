import React, { Component } from "react";

class Result extends Component {
  state = {};
  render() {
    var result = this.props.result;
    var equation = this.props.equation;
    return (
      <div
        className="result"
        style={{
          marginTop: "20px",
          marginLeft: "20.3px",
          width: "399px",
          height: "70px",
          backgroundColor: "#4a4f57",
          color: "#fff",
          padding: "4px",
          fontSize: "20px", 
          borderRadius: '4px'
        }}
      >
        <p style={{ textAlign: "right", margin: 'auto', paddingRight: '2px', fontSize: '18px' }}>{equation}</p>
        <p style={{ textAlign: "right", margin: 'auto', paddingRight: '2px', fontSize: '26px' }}>{result}</p>
      </div>
    );
  }
}

export default Result;
