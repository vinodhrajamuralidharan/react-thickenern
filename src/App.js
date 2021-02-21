import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Records from "./components/Records";
import Rechart from "./components/Rechart";
import { css } from "@emotion/core";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

class App extends Component {
  state = {
    lists: [],
    loading: true
  };
  componentDidMount() {
    fetch("https://reference.intellisense.io/thickenernn/v1/referencia")
      .then(res => res.json())
      .then(this.handleData.bind(this))
      .catch(error => {
        alert(error);
      });
  }

  handleData = response => {
    const matchReg = /^TK1_.*$/;
    const listObject = response.current.data.TK1;
    const recordKeys = Object.keys(listObject).filter(val =>
      matchReg.test(val)
    );
    const lists = recordKeys.map(key => {
      return {
        name: key,
        values: listObject[key].values,
        times: listObject[key].times
      };
    });

    this.setState({
      lists,
      loading: false
    });
  };

  renderTableAndGraph = () => {
    if (this.state.lists && this.state.lists.length > 0) {
      return (
        <div>
          <Records lists={this.state.lists} />
          <Rechart records={this.state.lists} />
        </div>
      );
    }
  };

  render() {
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      position: static;
    `;
    return (
      <div className="App">
        <ClimbingBoxLoader
          loader="climbingBoxLoader"
          css={override}
          size={50}
          color={"#123abc"}
          loading={this.state.loading}
        />
        {this.renderTableAndGraph()}
      </div>
    );
  }
}

export default App;
