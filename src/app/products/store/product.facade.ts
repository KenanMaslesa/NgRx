import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/store/app.state';
import { getCurrentProduct, getError, getProducts, getShowProductCode } from '.';
import { Product } from '../product';
import * as ProductActions from '../store/product.actions';

@Injectable({providedIn: 'root'})
export class ProductFacade {
  products$: Observable<Product[]> = this.store.select(getProducts);
  selectedProduct$: Observable<Product> = this.store.select(getCurrentProduct);
  errorMessage$: Observable<string> = this.store.select(getError);
  displayCode$: Observable<boolean> = this.store.select(getShowProductCode);
  constructor(private store: Store<State>) { }

  loadProducts(){
    this.store.dispatch(ProductActions.loadProducts());
  }

  toggleProductCode(){
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  initializeCurrentProduct() {
    this.store.dispatch(ProductActions.initializeCurrentProduct());
  }

  setCurrentProduct(product: Product) {
    this.store.dispatch(ProductActions.setCurrentProduct({product}));
  }

  deleteProduct(productId){
    this.store.dispatch(ProductActions.deleteProduct({productId}));
  }

  clearCurrentProduct(){
    this.store.dispatch(ProductActions.clearCurrentProduct());
  }

  createProduct(product){
    this.store.dispatch(ProductActions.createProduct({product}));
  }

  updateProduct(product){
    this.store.dispatch(ProductActions.updateProduct({product}));
  }

  getCurrentProduct(){
    return this.store.select(getCurrentProduct);
  }

}
