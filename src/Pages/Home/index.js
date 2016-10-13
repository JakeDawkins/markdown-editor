import React, { Component } from 'react';
import './styles.scss';

import Editor from "../../Components/Editor";
import ReactMarkdown from "react-markdown";

class App extends Component {

  constructor (props) {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (input) {
    this.setState(
      {md: input}
    );
  }

  wrapperStyles () {
    return (
      {
        margin: "20px"
      }
    );
  }

  mdStyles () {
    return (
      {
        border: "3px solid red",
        width: "50%",
        display: "inline-block"
      }
    );
  }

  render () {
    return (
      <div style={this.wrapperStyles()}>
        <Editor onChange={this.handleChange}/>
        <div style={this.mdStyles()}>
          <ReactMarkdown source={this.state && this.state.md ? this.state.md : "# Test"} />
        </div>
      </div>
    );
  }
}

export default App;
