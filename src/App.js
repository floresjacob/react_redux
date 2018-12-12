import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Jacob", age: 26 },
      { name: "Max", age: 39 },
      { name: "Tony", age: 30 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: "Max", age: 39 },
        { name: "Anthony", age: 30 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React App Bam</h1>
        <button onClick={() => this.switchNameHandler("Jacob0001")}>
          Switch Name
        </button>
        <p>Up Next: Functional Components!</p>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          I like to drink coffee
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          click={this.switchNameHandler.bind(this, `Jacob3`)}
          age={this.state.persons[2].age}
        >
          My Hobbies: Making Jerky
        </Person>
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi, I'm a React App!!!")
    // );
  }
}

export default App;
