import React, { useEffect, useState } from "react";
import { instance } from "../../axios/config";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { fetchproducts, removeProduct } from "../../action/productaction";
import Updateproduct from "../update";

const Products = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const products = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);

  const [showUpdate, setShowUpdate] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Local state to hold the selected product data

  const handleUpdateClick = (product) => {
    setSelectedProduct(product); // Set the selected product to the local state
    setShowUpdate(true);
  };

  const handleUpdateClose = () => {
    setShowUpdate(false);
  };

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products?.map((product: any) => (
          <li key={product.id}>
            {product.name} - ${product.price}{" "}
            <button
              onClick={() => {
                dispatch(removeProduct(product.id));
              }}
            >
              delete
            </button>
            <button onClick={() => handleUpdateClick(product)}>Update</button>
          </li>
        ))}
      </ul>

      {showUpdate && (
        <Updateproduct product={selectedProduct} onClose={handleUpdateClose} />
      )}
    </div>
  );
};

export default Products;
