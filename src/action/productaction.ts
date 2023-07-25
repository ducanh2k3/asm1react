import { instance } from "../axios/config";

export const fetchproducts = () => async (dispatch: any) => {
  try {
    const data = await instance.get("/products");
    dispatch({ type: "product/fetch", payload: data });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = (product: any) => async (dispatch: any) => {
  try {
    const data = await instance.post("/products", product);
    dispatch({ type: "product/add", payload: data });
  } catch (err) {
    console.log(err);
  }
};
export const removeProduct = (id: any) => async (dispatch: any) => {
  try {
    await instance.delete("/products/" + id);
    dispatch({ type: "product/delete", payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = (product: any) => async (dispatch: any) => {
  try {
    const data = await instance.put("/products/" + product.id, product);
    dispatch({ type: "product/update", payload: data });
  } catch (err) {
    console.log(err);
  }
};
