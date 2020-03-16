import React, { Component } from 'react';

class Keypad extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "button" style = {{width: '50%', height: '40px', marginLeft: '20px'}}>
                <button style = {operatorBtnStyle} name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button style = {operatorBtnStyle} name = "(" onClick = {e => this.props.onClick(e.target.name)}>(</button>
                <button style = {operatorBtnStyle} name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button style = {operatorBtnStyle} name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>


                <button style = {btnStyle} name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button style = {btnStyle} name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button style = {btnStyle} name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button style = {operatorBtnStyle} name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button style = {btnStyle} name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button style = {btnStyle} name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button style = {btnStyle} name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button style = {operatorBtnStyle}  name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button style = {btnStyle} name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button style = {btnStyle} name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button style = {btnStyle} name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button style = {operatorBtnStyle} name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button style = {btnStyle} name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button style = {btnStyle} name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button style = {equalBtnStyle} name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button style = {operatorBtnStyle} name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>


            </div>


         );
    }
}
 
export default Keypad;

const btnStyle = {
    backgroundColor: '#d6d6d6', 
    width: '102px', 
    height: '40px', 
    fontSize: '20px', 
    fontFamily: 'georgia', 
    cursor: 'pointer', 
    borderRadius: '4px'
}

const equalBtnStyle ={
    backgroundColor: '#7dbeff', 
    width: '102px', 
    height: '40px', 
    fontSize: '20px', 
    fontFamily: 'georgia', 
    cursor: 'pointer', 
    borderRadius: '4px'
}

const operatorBtnStyle = {
    backgroundColor: '#b0b0b0', 
    width: '102px', 
    height: '40px', 
    fontSize: '20px', 
    fontFamily: 'georgia', 
    cursor: 'pointer', 
    borderRadius: '4px'
}