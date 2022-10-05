import "./styles.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="App">
        <buttons onClick={this.increment}> increse </buttons>
        <buttons onClick={this.decrement}> decrease </buttons>
        <h2> {this.state.count}</h2>
      </div>
    );
  }
}

export default App;
