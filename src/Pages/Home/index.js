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
    this.showHelp = this.showHelp.bind(this);

  }

  // Use the browser's built-in functionality to quickly and safely escape
  // the string
  // escapeHtml(str) {
  //     var div = document.createElement('div');
  //     div.appendChild(document.createTextNode(str));
  //     return div.innerHTML;
  // }

  handleChange (input) {
    this.setState(
      {md: input}
    );
  }

  convertTextToJSONSafeString() {
    let text = this.state && this.state.md ? this.state.md : "";
    if(text.length === 0) return;

    text = text.replace(/\r?\n/g, "\\n"); //replace newline
    text = text.replace(/\[/, "\\[");
    text = text.replace(/\]/, "\\]");
    text = text.replace(/\(/, "\\(");
    text = text.replace(/\)/, "\\)");
    this.handleChange(`"${text}"`);
  }

  showHelp () {
    this.setState(
      {md: "# Help\n\nEnter valid markdown on the left side. This pane will auto-update\n\nTo copy a JSON safe string:\n\n- Click the \"Convert to JSON String\" button\n\n- Triple click the line\n\n- Right click and copy the selected text"}
    )
  }

  render () {
    return (
      <div id="mainWrapper">
        <ActionsBar showHelp={this.showHelp} handleConvert={this.convertTextToJSONSafeString}/>
        <div className="left">
          <Editor position="left" onChange={this.handleChange} startText={sampleText} />
        </div>
        <div className="right">
          <ReactMarkdown escapeHtml source={this.state && this.state.md ? this.state.md : sampleText} />
        </div>
      </div>
    );
  }
}

export default App;
