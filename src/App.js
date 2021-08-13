import { Component } from "react";
import "./App.css";
import React from "react";
import HeaderForm from "./components/headerFrom";
import BodyForm from "./components/bodyForm";

export default class App extends Component {
  state = {
    body: null,
  };

  fullData = async ({ data }) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=ad119eabcbf0c41565e2ed4d89808155`
    );
    const result = await response.json();
    this.setState({ body: result });
    console.log(result);
    // .then((stream) => stream.json())
    // .then((result) => this.setState({ body: result }));
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="mainPart">
          <HeaderForm fullData={this.fullData} />
          {this.state.body && <BodyForm fetchedData={this.state.body} />}
        </div>
      </div>
    );
  }
}
