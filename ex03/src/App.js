import { Component } from "react";
import LifeCycleExample from "./components/LifeCycleExample";

class App extends Component {
  state = { color: 'red' };

  handleClick = () => {
    this.setState({
      color: this.state.color === 'red' ? 'blue' : 'red'
    })
  }


  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          style={{ color: this.state.color }}
        >
          {this.state.color}
        </button>
        <LifeCycleExample color={this.state.color}></LifeCycleExample>
      </div>
    )
  }
}


export default App;
