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
    this.convertTextToJSONSafeString = this.convertTextToJSONSafeString.bind(this);
  }

  // Use the browser's built-in functionality to quickly and safely escape
  // the string
  escapeHtml(str) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
  }

  handleChange (input) {
    this.setState(
      {md: input}
    );
  }

  convertTextToJSONSafeString() {
    let text = this.state && this.state.md ? this.state.md : "";
    if(text.length === 0) return;

    text = this.escapeHtml(text);
    text = text.replace(/\r?\n/g, "\\n");
    this.handleChange(text);
  }

  render () {
    return (
      <div id="mainWrapper">
        <ActionsBar handleConvert={this.convertTextToJSONSafeString}/>
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
