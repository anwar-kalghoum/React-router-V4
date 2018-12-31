import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    this.props.history.replace("/products");
  };

  render() {
    return (
      <div>
        <h1>PC Details - {this.props.match.params.id} </h1>
        Intel Celeron N3350<br />
        1.1 GHz up 2.4 GHZ - 2 Mo cache<br />
        2 Go DDR3<br />
        Disque dur 500 Go SATA<br />
        11.6 pouce HD LED <br />
        Intel HD Graphics<br />

        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
