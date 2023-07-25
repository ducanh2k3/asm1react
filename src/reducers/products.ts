/* eslint-disable no-case-declarations */
import { produce } from "immer";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action: any) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case "product/fetch":
        draftState.products = action.payload; // Ensure the payload contains the array of products
        console.log(draftState.products);
        break;
      case "product/add":
        draftState.products.push(action.payload);
        break;
      case "product/update":
        const product = action.payload;
        draftState.products = state.products.map((item: any) =>
          item.id === product.id ? product : item
        );
        break;
      case "product/delete":
        const id = action.payload;
        draftState.products = state.products.filter(
          (item: any) => item.id !== id
        );
        break;
      default:
        return state;
    }
  });
};
