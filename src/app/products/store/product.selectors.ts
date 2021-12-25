import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducers";

const getProductFeatuureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatuureState,
  state => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatuureState,
  state => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeatuureState,
  state => state.products
);
