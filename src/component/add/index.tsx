import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../action/productaction";

const AddProducts = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    // Add other properties of the product here
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addProduct(product));
    // Optionally, you can reset the form fields here
    setProduct({
      name: "",
      price: 0,
      // Add other properties of the product here
    });
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        {/* Add other input fields for the product properties here */}
        <button type="submit">Add Product</button>
      </form>

      <br />

      
    </div>
  );
};

export default AddProducts;
