import React, { Component } from "react";

export default class Editor extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   text: this.props.startText || ""
    // }
    this.handleChange = this.handleChange.bind(this);
  }

  taStyles (classes) {
    return {
      width: "40%",
      height: "100%",
      marginRight:"5%",
      backgroundColor: "#eeeeee",
      display: "inline-block"
    }
  }

  handleChange () {
    // this.setState({text: this.refs.input.innerText});
    this.props.onChange(this.refs.input.innerText);
  }

  render () {
    return (
      <div
        className={this.props.position || ""}
        onInput={this.handleChange}
        ref="input" contentEditable
        style={{paddingTop: "24px"}}
      />
    );
  }

}

//<textarea style={this.taStyles()} onChange={this.handleChange} ref="input"></textarea>
