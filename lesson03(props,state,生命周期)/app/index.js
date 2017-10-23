import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

/**
 * 1丶props
 */
// ES6
// class HelloMessage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return <div>Hello {this.props.name}</div>;
//   }
// }
// ReactDOM.render(<HelloMessage name="刘德华" />, document.getElementById("app"));

// FUNCTION
// const HelloMessage = props => <div>Hello {props.name}</div>;

// HelloMessage.propTypes = {
//   name: PropTypes.string
// };

// HelloMessage.defaultProps = {
//   name: "王建鹏"
// };
// ReactDOM.render(<HelloMessage name="刘德华" />, document.getElementById("app"));

/**
 * 2丶state
 */
// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       secondsElapsed: 0
//     };
//     // 自定义方法需要自行绑定this,或使用箭头函数
//     this.tick = this.tick.bind(this);
//   }
//   // 累加器方法，每一秒被呼叫后就会使用setState()更新内部state，让Component重新render
//   tick() {
//     this.setState({
//       secondsElapsed: this.state.secondsElapsed + 1
//     });
//   }
//   //componentDidMount为component生命周期中component已经插入节点的阶段，通常一个非同步操作会放在这个阶段。这里每一秒执行一次tick()方法
//   componentDidMount() {
//     this.interval = setInterval(this.tick, 1000);
//   }
//   // componentWillUnmout为component生命周期中component即将移除插入节点的阶段，这里移除了this.interval
//   componentWillUnmout() {
//     clearInterval(this.interval);
//   }
//   //render显示内容
//   render() {
//     return <div>时间已经过去了:{this.state.secondsElapsed}</div>;
//   }
// }
// ReactDOM.render(<Timer />, document.getElementById("app"));
