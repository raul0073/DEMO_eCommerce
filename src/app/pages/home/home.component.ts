import { ProductService } from './../../services/product.service';
import { Component, Input } from '@angular/core';
import { ProductForBox } from 'src/app/classes/product-for-box';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // set constructor
  constructor(private  productsS: ProductService) {}
  // set products list
  products: ProductForBox[]=[];
  @Input() imageSrc: string = "";
  

  // call service for and fill products list
  getAllProducts() {
    this.productsS.getProductsForBox().subscribe((response: any) => {
      this.products = response.products.map((product: any) => {
        return new ProductForBox(
          product.id,
          product.thumbnail,
          product.title,
          product.description,
          product.brand,
          product.price,
          product.rating,
          product.discountPercentage,
          product.images[2],
          product.category,
        );
        
      });
    });
  }

  ngOnInit(): void{
    this.getAllProducts();
  }
}
