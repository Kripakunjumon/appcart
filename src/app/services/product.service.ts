import { Injectable } from '@angular/core';

import{ Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   
  products: Product[] = [
     new Product(1, 'product 1', 'Thi is the product 1 description. This product is so cool',100),
     new Product(2, 'product 2', 'Thi is the product 2 description. This product is so cool',150),
     new Product(3, 'product 3', 'Thi is the product 3 description. This product is so cool',50),
     new Product(4, 'product 4', 'Thi is the product 4 description. This product is so cool',200),
     new Product(5, 'product 5', 'Thi is the product 5 description. This product is so cool',300),
     new Product(6, 'product 6', 'Thi is the product 6 description. This product is so cool',250),
     new Product(7, 'product 7', 'Thi is the product 7 description. This product is so cool',400)
   
  ]

  constructor() { }

  getProducts(): Product[]{
      //TODO: populate products fom an API and return an observble
      return this.products
  }
}
