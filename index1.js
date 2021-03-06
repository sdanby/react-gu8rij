import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDom from'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Steve'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <p>
          Writing something here too.
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
