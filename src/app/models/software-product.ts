import { Product } from './product';

export class SoftwareProduct extends Product {
  constructor(id: number,
              name: string,
              description: string,
              category_id: number,
              price: number,
              image_path: string,
              public operating_system: string
  ) {
    super(id, name, description, category_id, price, image_path)
  }
}
