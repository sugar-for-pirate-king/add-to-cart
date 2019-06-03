import { Component, OnInit } from "@angular/core";

import { Product } from "./../product/product.model";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Product[];
  totalPrice: number;

  constructor() {
    this.products = [
      new Product("Nanami", 4000000),
      new Product("Laptop", 200000),
      new Product("Shina", 250000)
    ];
    this.totalPrice = 0;
  }

  ngOnInit() {}

  syncTotalPrice(product: Product) {
    this.totalPrice += product.price;
  }
}
