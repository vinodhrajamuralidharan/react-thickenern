import React, { Component } from "react";
import List from "../components/List";

export default class Records extends Component {
  render() {
    const lists = this.props.lists.map((list, index) => {
      return <List key={index} name={list.name} values={list.values} />;
    });
    return (
      <table className="table table-dark table-hover mb-5">
        <thead>
          <tr>
            <th scope="col">Metric</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>{lists}</tbody>
      </table>
    );
  }
}
