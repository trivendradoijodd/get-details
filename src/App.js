import React, { Component } from "react";
import "./styles.css";
import { header, browser, os, matchItem } from "./utils/helper";
import styled from "styled-components";

const Card = styled.div`
  border: 3px solid;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 1px 3px 5px black;
`;

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
                <h1 style={{ textAlign: "center" }}>Get User Details</h1>
        <Card>
          <b>User Agent</b>
          <p>{this.state.userAgent}</p>
        </Card>
        <Card>
          <b>OS</b> {this.state.operatingSystem?.name}
        </Card>
        <Card>
          <b>Browser</b> {this.state.browser?.name}
        </Card>
      </>
    );
  }
}

export default App;
