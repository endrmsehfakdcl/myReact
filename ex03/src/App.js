import { Component } from "react";
import LifeCycleExample from "./components/LifeCycleExample";
import UseMemoExample from "./components/UseMemoExample";
import UseMemoExample2 from "./components/UseMemoExample2";
import Average from "./components/Average";
import UseCallbackExample from "./components/UseCallbackExample";
import BoxSize from "./components/BoxSize";
import AverageCallback from "./components/AverageCallback";

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
        {/* <button
          onClick={this.handleClick}
          style={{ color: this.state.color }}
        >
          {this.state.color}
        </button>

        <LifeCycleExample color={this.state.color}></LifeCycleExample> */}

        {/* <hr />
        <UseMemoExample></UseMemoExample> */}
        {/* <hr />
        <UseMemoExample2></UseMemoExample2>
        <hr /> */}
        {/* <Average></Average>
        <hr /> */}
        {/* <UseCallbackExample></UseCallbackExample>
        <hr /> */}
        <BoxSize></BoxSize>

        {/* <AverageCallback></AverageCallback> */}
      </div>
    )
  }
}


export default App;
