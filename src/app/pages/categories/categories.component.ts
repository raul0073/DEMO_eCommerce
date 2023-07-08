import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent {

  constructor(private productService: ProductService, public route: ActivatedRoute){}

  @Input() category: any;
  catName: any;
  noOfBrands: number = 0;

  getCategoryItems(category: string){
    this.productService.getProductsForBox().subscribe((response: any) => {
       this.category = response.products.filter((product: any) => {
       return product.category == category
      })
    })
  }

  // getNumberOfBrands(category: string){
  //   this.productService.getProductsForBox().subscribe((response: any) => {
  //     this.category = response.products.map((product: any) => {
  //     return this.noOfBrands = product.brands.count()
  //    })
  //  })
  // }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.catName = params['category'];
      this.getCategoryItems(this.catName)
    })
  }
}
  
