(this["webpackJsonpmath-tools"]=this["webpackJsonpmath-tools"]||[]).push([[0],{20:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_samue_React_math_tools_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),C_Users_samue_React_math_tools_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),C_Users_samue_React_math_tools_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),C_Users_samue_React_math_tools_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),C_Users_samue_React_math_tools_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Keypad__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(21),_Result__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(22),Calculator=function(_Component){function Calculator(){var _getPrototypeOf2,_this;Object(C_Users_samue_React_math_tools_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(C_Users_samue_React_math_tools_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(C_Users_samue_React_math_tools_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.state={equation:"",result:""},_this.onClick=function(e){"="==e?_this.calculate():"C"==e?_this.reset():"CE"==e?_this.backspace():_this.setState({equation:_this.state.equation+e})},_this.calculate=function(){try{_this.setState({result:eval(_this.state.equation)})}catch(e){_this.setState({equation:"error"})}},_this.reset=function(){_this.setState({equation:"",result:""})},_this.backspace=function(){_this.setState({equation:_this.state.equation.slice(0,-1)})},_this}return Object(C_Users_samue_React_math_tools_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_Component),Object(C_Users_samue_React_math_tools_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Result__WEBPACK_IMPORTED_MODULE_7__.a,{result:this.state.result,equation:this.state.equation}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Keypad__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick}))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=Calculator},21:function(e,t,a){"use strict";var n=a(4),r=a(5),_=a(7),o=a(6),l=a(8),c=a(0),s=a.n(c),i=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"button",style:{width:"50%",height:"40px",marginLeft:"20px"}},s.a.createElement("button",{style:m,name:"CE",onClick:function(t){return e.props.onClick(t.target.name)}},"CE"),s.a.createElement("button",{style:m,name:"(",onClick:function(t){return e.props.onClick(t.target.name)}},"("),s.a.createElement("button",{style:m,name:")",onClick:function(t){return e.props.onClick(t.target.name)}},")"),s.a.createElement("button",{style:m,name:"C",onClick:function(t){return e.props.onClick(t.target.name)}},"C"),s.a.createElement("br",null),s.a.createElement("button",{style:u,name:"1",onClick:function(t){return e.props.onClick(t.target.name)}},"1"),s.a.createElement("button",{style:u,name:"2",onClick:function(t){return e.props.onClick(t.target.name)}},"2"),s.a.createElement("button",{style:u,name:"3",onClick:function(t){return e.props.onClick(t.target.name)}},"3"),s.a.createElement("button",{style:m,name:"+",onClick:function(t){return e.props.onClick(t.target.name)}},"+"),s.a.createElement("br",null),s.a.createElement("button",{style:u,name:"4",onClick:function(t){return e.props.onClick(t.target.name)}},"4"),s.a.createElement("button",{style:u,name:"5",onClick:function(t){return e.props.onClick(t.target.name)}},"5"),s.a.createElement("button",{style:u,name:"6",onClick:function(t){return e.props.onClick(t.target.name)}},"6"),s.a.createElement("button",{style:m,name:"-",onClick:function(t){return e.props.onClick(t.target.name)}},"-"),s.a.createElement("br",null),s.a.createElement("button",{style:u,name:"7",onClick:function(t){return e.props.onClick(t.target.name)}},"7"),s.a.createElement("button",{style:u,name:"8",onClick:function(t){return e.props.onClick(t.target.name)}},"8"),s.a.createElement("button",{style:u,name:"9",onClick:function(t){return e.props.onClick(t.target.name)}},"9"),s.a.createElement("button",{style:m,name:"*",onClick:function(t){return e.props.onClick(t.target.name)}},"x"),s.a.createElement("br",null),s.a.createElement("button",{style:u,name:"0",onClick:function(t){return e.props.onClick(t.target.name)}},"0"),s.a.createElement("button",{style:u,name:".",onClick:function(t){return e.props.onClick(t.target.name)}},"."),s.a.createElement("button",{style:p,name:"=",onClick:function(t){return e.props.onClick(t.target.name)}},"="),s.a.createElement("button",{style:m,name:"/",onClick:function(t){return e.props.onClick(t.target.name)}},"\xf7"),s.a.createElement("br",null))}}]),t}(c.Component);t.a=i;var u={backgroundColor:"#d6d6d6",width:"102px",height:"40px",fontSize:"20px",fontFamily:"georgia",cursor:"pointer",borderRadius:"4px"},p={backgroundColor:"#7dbeff",width:"102px",height:"40px",fontSize:"20px",fontFamily:"georgia",cursor:"pointer",borderRadius:"4px"},m={backgroundColor:"#b0b0b0",width:"102px",height:"40px",fontSize:"20px",fontFamily:"georgia",cursor:"pointer",borderRadius:"4px"}},22:function(e,t,a){"use strict";var n=a(4),r=a(5),_=a(7),o=a(6),l=a(8),c=a(0),s=a.n(c),i=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.result,t=this.props.equation;return s.a.createElement("div",{className:"result",style:{marginTop:"20px",marginLeft:"20.3px",width:"399px",height:"70px",backgroundColor:"#4a4f57",color:"#fff",padding:"4px",fontSize:"20px",borderRadius:"4px"}},s.a.createElement("p",{style:{textAlign:"right",margin:"auto",paddingRight:"2px",fontSize:"18px"}},t),s.a.createElement("p",{style:{textAlign:"right",margin:"auto",paddingRight:"2px",fontSize:"26px"}},e))}}]),t}(c.Component);t.a=i},25:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),_=a(19),o=a.n(_),l=(a(30),a(4)),c=a(5),s=a(7),i=a(6),u=a(8),p=(a(31),a(20));function m(){return r.a.createElement("div",{className:"topnav",style:b},r.a.createElement("a",{style:E,href:"about"},"About"),r.a.createElement("a",{style:E,href:"calculator"},"Calculator"),r.a.createElement("a",{style:E,href:"binary-converter"},"Binary Converter"))}var b={backgroundColor:"#333",height:"40px",overflow:"hidden",textAlign:"center",hover:{color:"red"}},E={float:"left",color:"#f2f2f2",textAlign:"center",padding:"14px 16px",textDecoration:"none",fontSize:"17px"},h=a(10),C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),_=0;_<n;_++)r[_]=arguments[_];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={value:0,binary:0},a.handleChange=function(e){e.preventDefault();var t=e.target.value,n=(t>>>0).toString(2);a.setState({value:t,binary:n})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:g},r.a.createElement("form",{id:"numberForm",onChange:this.handleChange},r.a.createElement("h1",{style:f},"Enter a number"),r.a.createElement("input",{type:"number",style:d}),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("h1",{style:f},"In Binary"),r.a.createElement("div",{style:d},this.state.binary))}}]),t}(n.Component),d={marginTop:"20px",marginLeft:"20px",background:"#fff",width:"1200px",height:"50px",border:"1px solid black",borderRadius:"15px",textAlign:"center",fontSize:"34px"},f={textAlign:"center"},g={background:"#969696",marginLeft:"20px",width:"1240px",height:"400px",borderRadius:"15px"},k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),_=0;_<n;_++)r[_]=arguments[_];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={result:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(h.a,{exact:!0,path:"/(about|)",render:function(e){return r.a.createElement("p",{style:{padding:"0px 7px"}},"Website for basic calculator and a binary converter using React framework.")}}),r.a.createElement(h.a,{path:"/calculator",component:p.a}),r.a.createElement(h.a,{path:"/binary-converter",component:C}))}}]),t}(n.Component),y=a(14);o.a.render(r.a.createElement(y.a,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.24d45876.chunk.js.map