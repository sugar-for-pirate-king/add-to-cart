import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

import { Product } from "./product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  @Output() onProductAdded: EventEmitter<Product>;

  constructor() {
    this.onProductAdded = new EventEmitter();
  }

  ngOnInit() {}

  addToCart(product: Product) {
    console.log(`Product ${product.name} ditambahkan di keranjang`);
    this.onProductAdded.emit(product);
  }
}
