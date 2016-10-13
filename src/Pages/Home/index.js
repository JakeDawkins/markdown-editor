import React, { Component } from 'react';
import './styles.scss';

import Editor from "../../Components/Editor";
import ReactMarkdown from "react-markdown";
import ActionsBar from "../../Components/ActionsBar";

const sampleText = "# Edit on the left";

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

  render () {
    return (
      <div id="mainWrapper">
        <ActionsBar />
        <Editor position="left" onChange={this.handleChange} startText={sampleText} />
        <div className="right">
          <ReactMarkdown source={this.state && this.state.md ? this.state.md : sampleText} />
        </div>
      </div>
    );
  }
}

export default App;
