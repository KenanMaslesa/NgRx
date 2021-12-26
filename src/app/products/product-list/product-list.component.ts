import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../product';
import { ProductFacade } from '../store/product.facade';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';

  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;
  selectedProduct$: Observable<Product>;
  displayCode$: Observable<boolean>;

  constructor(private productFacade: ProductFacade) { }

  ngOnInit(): void {
    this.selectedProduct$ = this.productFacade.selectedProduct$;

    this.products$ = this.productFacade.products$;

    this.errorMessage$ = this.productFacade.errorMessage$;

    this.productFacade.loadProducts();

    this.displayCode$ = this.productFacade.displayCode$;
  }

  checkChanged(): void {
    this.productFacade.toggleProductCode();
  }

  newProduct(): void {
    this.productFacade.initializeCurrentProduct();
  }

  productSelected(product: Product): void {
    this.productFacade.setCurrentProduct(product);
  }

}
