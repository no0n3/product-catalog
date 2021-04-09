import { Component } from '@angular/core';
import { Category } from './models/category';
import { Product } from './models/product';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-spa';

  public categories: Category[]
  public products: Product[]
  public hasMore: boolean

  public selectedCategory: number

  constructor(private categoryService: CategoryService,
              private productService: ProductService) {
    this.resetProducts()

    this.categories = categoryService.getCategories()
  }

  loadProducts(categoryId: number) {
    const lastProductId = this.products.length ? this.products[this.products.length - 1].id : 0
    const result = this.productService.getProducts(lastProductId, categoryId)

    if (result.length < ProductService.PER_PAGE) {
      this.hasMore = false
    }

    for (const product of result) {
      this.products.push(product)
    }
  }

  selectCategory(category: Category) {
    if (category.id == this.selectedCategory) {
      return false
    }
    this.selectedCategory = category.id
    this.resetProducts()
  }

  private resetProducts() {
    this.products = []
    this.hasMore = true
    this.loadProducts(this.selectedCategory)
  }
}
