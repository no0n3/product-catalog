import { ProductType } from './product-type'

export abstract class Product {
  constructor(public id: number,
              public name: string,
              public description: string,
              public category_id: number,
              public price: number,
              public image_path: string) {}
  
  type() {
    return ProductType[this.category_id]
  }
}
