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
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  handleChange (input) {
    this.setState(
      {md: input}
    );
  }

  copyToClipboard() {
    let text = this.state && this.state.md ? this.state.md : "";
    if(text.length === 0) return;

    text = text.replace(/\r\n?|\n/g, '<br />');

    window.prompt("Copy to clipboard: Ctrl+C, Enter", this.state.md)
  }

  render () {
    return (
      <div id="mainWrapper">
        <ActionsBar handleCopyClipboard={this.copyToClipboard}/>
        <div className="left">
          <Editor position="left" onChange={this.handleChange} startText={sampleText} />
        </div>
        <div className="right">
          <ReactMarkdown source={this.state && this.state.md ? this.state.md : sampleText} />
        </div>
      </div>
    );
  }
}

export default App;
