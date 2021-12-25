import { createReducer, on } from "@ngrx/store";
import { Product } from "../product";
import * as AppState from '../../store/app.state';
import * as ProductActions from "./product.actions";

export interface State extends AppState.State {
  products: ProductState;
}

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
  })
)
