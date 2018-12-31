import React, { Component } from "react";
import { Link } from "react-router-dom";

class Products extends Component {
  state = {
    products: [
      { id: 1, name: "PC HP 1" },
      { id: 2, name: "PC ASUS 2" },
      { id: 3, name: "PC TOSHIBA 3" }
    ]
  };

  render() {
    return (
      <div>
        <h1>Products List</h1>
        <ul>
          {this.state.products.map(product => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
