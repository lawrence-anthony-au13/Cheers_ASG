import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "React Movie cards",
    };
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-5">
          <Movies />
        </div>
      </div>
    );
  }
}
