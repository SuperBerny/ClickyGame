import React, { Component } from "react";
import TransformerCard from "./components/TransformerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import transformers from "./transformers.json";
import "./App.css";

class App extends Component {
  state = {
    transformers
  };

shuffle() {
  console.log("hello");
    transformers.sort(function(a, b) {
      return 0.5 - Math.random();
    });
}

  // Map over this.state.friends and render a TranformerCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.transformers.map(transformer => (
          <TransformerCard
            image={transformer.image}
            key={transformer.id}
            shuffle={this.shuffle}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
