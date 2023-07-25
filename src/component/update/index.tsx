// Updateproduct.tsx
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../action/productaction";
const Updateproduct = ({
  product,
  onClose,
}: {
  product: any;
  onClose: () => void;
}) => {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });
  const dispatch = useDispatch();
  useEffect(() => {
    // Update the local state with the selected product data whenever the product prop changes
    setUpdatedProduct({ ...product });
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your logic to handle the update, e.g., dispatching an action to update the product
    // ...
    dispatch(updateProduct(updatedProduct));
    console.log(updatedProduct);

    onClose(); // Close the "Updateproduct" component after submission or update
  };

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={updatedProduct.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={updatedProduct.price}
            onChange={handleChange}
          />
        </div>
        {/* Add other input fields for the product properties here */}
        <button type="submit">Update Product</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Updateproduct;
