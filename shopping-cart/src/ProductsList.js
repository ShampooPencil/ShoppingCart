import { useState } from "react";
// import PropTypes from "prop-types";
import Product from "./Product.js";
//import { Test } from './ProductsList.styles';

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [validation, setValidation] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name) {
      setValidation("Please enter a name");
      return;
    }
    if (!description) {
      setValidation("Please enter a description");
      return;
    }
    setProducts([
      ...products,
      { id: products.length, name: name, description: description },
    ]);
    setName("");
    setDescription("");
    setValidation("");
    console.log(products);
  }

  function handleDeleteButton(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="product-name">Name:</label>
          <input
            type="text"
            id="product-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter the name"
            className="textfield"
          />
        </div>
        <div>
          <label htmlFor="product-description">Description:</label>
          <input
            type="text"
            id="product-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the description"
            className="textfield"
          />
        </div>
        <div className="form-footer">
          <div className="validation-message">{validation}</div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add product"
          />
        </div>
      </form>
      {/* <div> {products.length === 0 && <p>Add your first product</p>}</div> */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Product details={product} />
            <button
              className="btn-outline btn-delete"
              onClick={() => handleDeleteButton(product.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
