import React from 'react'; //import ReactDOM from 'react-dom';

export default class App extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement("h1", null, " Hello from React bundled! "), React.createElement("h1", null, " \u0412\u0440\u0435\u043C\u044F: ", new Date().toString(), " "));
  }

}