import { createReducer, on } from "@ngrx/store";
import { Product } from "../product";
import * as ProductActions from "./product.actions";



export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: [],
  error: ''
}

export const productReducer = createReducer(
  initialState,
  on(ProductActions.toggleProductCode, (state) => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    }
  }),
  on(ProductActions.setCurrentProduct, (state, action) => {
    return {
      ...state,
      currentProduct: action.product
    }
  }),
  on(ProductActions.clearCurrentProduct, (state) => {
    return {
      ...state,
      currentProduct: null
    }
  }),
  on(ProductActions.initializeCurrentProduct, (state) => {
    return {
      ...state,
      currentProduct: {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0
      }
    }
  }),
  on(ProductActions.loadProductsSuccess, (state, action) => {
    return {
      ...state,
      products: action.products,
      error: ''
    }
  }),
  on(ProductActions.loadProductsFailure, (state, action) => {
    return {
      ...state,
      products: [],
      error: action.error
    }
  }),
  on(ProductActions.updateProductSuccess, (state, action) => {
    const updatedProducts = state.products.map(item =>
      action.product.id === item.id ? action.product: item);

    return {
      ...state,
      products: updatedProducts,
      currentProduct: action.product,
      error: ''
    }
  }),
  on(ProductActions.updateProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  })
)
