import React, { Component } from "react";
import "./styles.css";
import { header, browser, os, matchItem } from "./utils/helper";

class App extends Component {
  state = {
    userAgent: "",
    operatingSystem: {},
    browser: {}
  };

  componentDidMount() {
    const uA = header.join(" ");
    this.setState({
      userAgent: uA,
      operatingSystem: matchItem(uA, os),
      browser: matchItem(uA, browser)
    });
  }

  render() {
    return (
      <>
        <div>
          <b>User Agent</b> {this.state.userAgent}
        </div>
        <div>
          <b>OS</b> {this.state.operatingSystem?.name}
        </div>
        <div>
          <b>Browser</b> {this.state.browser?.name}
        </div>
      </>
    );
  }
}

export default App;
