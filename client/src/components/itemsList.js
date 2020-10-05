import React, { Component } from "react";
import axios from "axios";

class Items extends Component {
  constructor() {
    super();
    this.state = {
      itemsList: [],
    };
  }

  componentDidMount() {
    axios.get("/api/items/items").then((res) => {
      const itemsList = res.data;
      this.setState({ itemsList: itemsList });
      console.log(itemsList);
    });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID #</th>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Date Received</th>
              <th scope="col">Expiration Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.itemsList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td> ${item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.date_received}</td>
                <td>{item.exp_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Items;
