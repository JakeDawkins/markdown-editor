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

  handleChange (input) {
    this.setState(
      {
        md: input,
        mode: "editing"
      }
    );
  }

  convertTextToJSONSafeString() {
    this.setState({mode: "copying"});
    // let text = this.state && this.state.md ? this.state.md : "";
    // if(text.length === 0) return;
    //
    // text = text.replace(/\r?\n/g, "\\n"); //replace newline
    // document.getElementById('code').innerText = `"${text}"`;
  }

  getSafeString () {
    this.setState({mode: "copying"});
    let text = this.state && this.state.md ? this.state.md : "";
    if(text.length === 0) return;

    text = text.replace(/\r?\n/g, "\\n"); //replace newline
    return text;
  }

  showHelp () {
    this.setState(
      {md: "# Help\n\nEnter valid markdown on the left side. This pane will auto-update\n\nTo copy a JSON safe string:\n\n- Click the \"Convert to JSON String\" button\n\n- Triple click the line\n\n- Right click and copy the selected text"}
    )
  }

  renderRight () {
    //conditionally show the markdown preview
    if(this.state && this.state.mode && this.state.mode === "editing") {
      return (<ReactMarkdown source={this.state && this.state.md ? this.state.md : sampleText} />);
    }
  }

  render () {
    return (
      <div id="mainWrapper">
        <ActionsBar showHelp={this.showHelp} handleConvert={this.convertTextToJSONSafeString}/>
        <div className="left">
          <Editor position="left" onChange={this.handleChange} startText={sampleText} />
        </div>
        <div className="right">
          {
            this.state && this.state.mode && this.state.mode === "copying"
            ? <pre><code id="code">{this.getSafeString()}</code></pre>
            : <ReactMarkdown source={this.state && this.state.md ? this.state.md : sampleText} />
          }
          {/*this.renderRight()*/}
        </div>
      </div>
    );
  }
}

export default App;
