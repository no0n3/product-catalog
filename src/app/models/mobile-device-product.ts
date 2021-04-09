import { Product } from './product';

export class MobileDeviceProduct extends Product {
  constructor(id: number,
              name: string,
              description: string,
              category_id: number,
              price: number,
              image_path: string,
              public battery: string,
              public processor: string
  ) {
    super(id, name, description, category_id, price, image_path)
  }
}
