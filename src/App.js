import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import ColoredBlock from './ColoredBlock';

// let time = new Date().toLocaleString();

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
          
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <p>
//         The time is {time}
//       </p>
      
//     </div>
//   );
// }


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hi {this.props.name}!
        </p>
        <Clock ></Clock>
        <div className="main-content">
          <ColoredBlock />
        </div>
        <footer>Kay Consults &copy; 2019</footer>
      </div>
    );
  }
}

export default App;
