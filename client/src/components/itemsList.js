import React, { Component } from 'react';
import axios from 'axios';

class Items extends Component {
  constructor() {
    super();
    this.state = {
      itemsList: [],
    };
  }

  componentDidMount() {
    axios.get(`/api/items/items`).then((res) => {
      const itemsList = res.data;
      this.setState({ itemsList });
      console.log(itemsList);
    });
  }

  render() {
    return (
      <div>
        <table class="table">
          <thead class="thead-dark">
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
            {this.state.itemsList.map((itemsList) => (
              <tr>
                <td key={itemsList.id}>{itemsList.id}</td>
                <td>{itemsList.name}</td>
                <td> ${itemsList.price}</td>
                <td>{itemsList.quantity}</td>
                <td>{itemsList.date_received}</td>
                <td>{itemsList.exp_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Items;
