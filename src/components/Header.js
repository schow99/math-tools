import React from "react";

export default function Header() {
  return (
    <div className="topnav" style={navStyle}>
        <a style = {linkStyle} href = '#/about'>About</a>
        <a style = {linkStyle} href = '#/calculator'>Calculator</a>
        <a style = {linkStyle} href = '#/binary-converter'>Binary Converter</a>
    </div>
    
  );
}

const navStyle = {
  backgroundColor: "#333",
  height: "40px",
  overflow: "hidden", 
  textAlign: 'center', 
  hover: {
    color: 'red'
  }
};
const linkStyle = {
    float: 'left',
    color: '#f2f2f2',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
    fontSize: '17px',    
};


