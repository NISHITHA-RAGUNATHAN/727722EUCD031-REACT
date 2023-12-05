[2:51 pm, 05/12/2023] Arnika Bear 🐻: import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      showMessage: false
    };
  }

  handleMessageFromChild = (event) => {
    this.setState({ message: event });
  }

  toggleMessage = () => {
    this.setState({ showMessage: !this.state.showMessage });
  }

  render() {
    return (
      <div>
      
        <ChildComponent 
          messageFromParent="Hello from Parent!" 
          sendMessageToParent={this.handleMessageFromChild} 
        />
        <h2>Component 2</h2>  
        <button onClick={this.toggleMessage}>
          {this.state.showMessage ? 'Hide' : 'Show'} Message
        </button>

        {this.state.showMessage && (
          <p>Message from child: {this.state.message}</p>
        )}
      </div>
    );
}

}

export default ParentComponent;
[2:51 pm, 05/12/2023] Arnika Bear 🐻: import React, { Component } from 'react';
import './App.css'

class TwoWayBindingComponent extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with an empty string
    this.state = { inputValue: '' };
  }

  // Event handler for the input change
  handleInputChange = (e) => {
    this.setState(
      {
        inputValue: e.target.value
      }
      );
  }

  render() {
    return (
        <>
        <h1>Example of Two-way Data-Binding using class Component</h1>
      <div className='TwoApp'>
        <textarea rows={10} cols={50}
        value={this.state.inputValue} // The textarea is controlled by the state
        onChange={this.handleInputChange} // Update the state on input change
        />
        <p>Current Value: {this.state.inputValue}</p> {/* Displaying the current value */}
      </div>
      </>
    );
  }
}

export default TwoWayBindingComponent;