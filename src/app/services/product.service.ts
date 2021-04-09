import { Injectable } from '@angular/core';
import { FashionProduct } from '../models/fashion-product';
import { MobileDeviceProduct } from '../models/mobile-device-product';
import { Product } from '../models/product';
import { SoftwareProduct } from '../models/software-product';

interface ProductJson {
  id: number;
  name: string;
  description: string;
  category_id: number;
  price: number;
  image_path: string;
  battery?: string;
  processor?: string;
  size?: string;
  color?: string;
  operating_system?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  static readonly PER_PAGE = 6

  private products = [
    {
      "id": 1,
      "category_id": 1,
      "name": 'product1',
      "description": 'descr1',
      "image_path": 'https://i.picsum.photos/id/787/400/300.jpg?hmac=3ULs9SuUe9ZEE-c3tK-fK_3pK2-CnOHc508xHEZxSyY',
      "price": 12,
      "operating_system": "Linux"
    },
    {
      "id": 2,
      "category_id": 1,
      "name": "product2",
      "description": "descr",
      "image_path": "https://i.picsum.photos/id/402/400/300.jpg?hmac=yuSl6-m-6ksFthxBPFDCl3Yn5hNKCAIUjflILLB2zVo",
      "price": 12,
      "operating_system": "Windows"
    },
    {
      "id": 3,
      "category_id": 1,
      "name": "product3",
      "description": "descr",
      "image_path": "https://i.picsum.photos/id/727/400/300.jpg?hmac=EH8ULFhDT-O_73XW-8dmKRqHzoHT1vNVPe45_OAOFOk",
      "price": 13,
      "operating_system": "Windows"
    },
    {
      "id": 4,
      "category_id": 2,
      "name": "product4",
      "description": "descr",
      "image_path": "https://i.picsum.photos/id/882/400/300.jpg?hmac=r1-DUsmO67LTGqOuS8mFRIG_gfIKAJem-T1rGBZukTg",
      "price": 14,
      "battery": "battery1",
      "processor": "processor1"
    },
    {
      "id": 5,
      "category_id": 2,
      "name": "product5",
      "description": "descr",
      "image_path": "https://i.picsum.photos/id/343/400/300.jpg?hmac=-C8QSswhhqSHEd-YVplV2qI8GyUHlQg6VsOVIiGfHi0",
      "price": 15,
      "battery": "battery2",
      "processor": "processor2"
    },
    {
      "id": 6,
      "category_id": 2,
      "name": "product6",
      "description": "descr",
      "image_path": "https://i.picsum.photos/id/51/400/300.jpg?hmac=Er7ddl0a0PciY4DYlIM9AiacbF5qklteFpHyNnfizHY",
      "price": 16,
      "battery": "battery3",
      "processor": "processor3"
    },
    {
      "id": 7,
      "category_id": 2,
      "name": "product7",
      "description": "descr",
      "image_path": "https://i.picsum.photos/id/248/400/300.jpg?hmac=GCWbjGqOllc3dPuqLPTYuyVtATyQYKj02QTdzzxAQeI",
      "price": 17,
      "battery": "battery4",
      "processor": "processor4"
    },
    {
      "id": 8,
      "category_id": 3,
      "name": "product8",
      "description": "descr",
      "image_path": "https://i.picsum.photos/id/877/400/300.jpg?hmac=qD6pLIhs_M4_LL-K2MYUuyd89Dzqfo1iNVEM7CyYScs",
      "price": 18,
      "size": "12x3",
      "color": "blue"
    },
    {
      "id": 9,
      "category_id": 3,
      "name": "product9",
      "description": "descr",
      "image_path": "https://i.picsum.photos/id/173/400/300.jpg?hmac=SQiEnGUvgrXTpHVkikn_bpU9MZduU0MXRCZu9MPxwpM",
      "price": 19,
      "operating_system": "Linux",
      "size": "13x5",
      "color": "red"
    },
    {
      "id": 10,
      "category_id": 1,
      "name": "product10",
      "description": "descr",
      "image_path": "https://i.picsum.photos/id/1032/400/300.jpg?hmac=Rkiof8u-d-1ylr7vgmEkiO8VIdjAeGH4uT7CmxJ4FmM",
      "price": 20,
      "operating_system": "Windows"
    },
    {
      "id": 11,
      "category_id": 3,
      "name": "product11",
      "description": "descr",
      "image_path": "https://i.picsum.photos/id/882/400/300.jpg?hmac=r1-DUsmO67LTGqOuS8mFRIG_gfIKAJem-T1rGBZukTg",
      "price": 21,
      "size": "16x5",
      "color": "black"
    },
    {
      "id": 12,
      "category_id": 3,
      "name": "product12",
      "description": "descr",
      "image_path": "https://i.picsum.photos/id/879/400/300.jpg?hmac=IwJQvHp6uPsppNCyRSKMzWHHPp3xf6NA3FetziFpEOU",
      "price": 22,
      "size": "21x7",
      "color": "green"
    },
    {
      "id": 13,
      "category_id": 3,
      "name": "product13",
      "description": "descr",
      "image_path": "https://i.picsum.photos/id/174/400/300.jpg?hmac=Q00UbJLnWEKrRUrP6_K_l5YTYHWqrQTUAixl5M7NlX8",
      "price": 23,
      "size": "10x5",
      "color": "pink"
    },
    {
      "id": 14,
      "category_id": 2,
      "name": "product14",
      "description": "descr",
      "image_path": "https://i.picsum.photos/id/654/400/300.jpg?hmac=ornMoszfD82WQrS3Gaa8D11njD_rVu17IHDh4e3pN-Y",
      "price": 24,
      "battery": "battery5",
      "processor": "processor5"
    },
    {
      "id": 15,
      "category_id": 3,
      "name": "product15",
      "description": "descr",
      "image_path": "https://i.picsum.photos/id/323/400/300.jpg?hmac=2EbkxdMp9KT6S3wGeqfaU_VnIMkzCzZFULpOD6M_0Po",
      "price": 25,
      "size": "17x8",
      "color": "purple"
    }
  ]

  constructor() { }

  getProducts(fromId: number = 0, categoryId: number = null) {
    const targetProducts = categoryId ?
      this.products.filter(product => product.category_id == categoryId) :
      this.products

    const pageResult = []
    for (let i = fromId, c = 0; i < targetProducts.length && c < ProductService.PER_PAGE; i++, c++) {
      pageResult.push(targetProducts[i])
    }

    return pageResult.map(product => ProductService.fromJson(product))
  }

  private static fromJson(productJson: ProductJson) : Product {
    if (productJson.category_id == 1) {
      return new SoftwareProduct(
        productJson.id,
        productJson.name,
        productJson.description,
        productJson.category_id,
        productJson.price,
        productJson.image_path,
        productJson.operating_system
      )
    } else if (productJson.category_id == 2) {
      return new MobileDeviceProduct(
        productJson.id,
        productJson.name,
        productJson.description,
        productJson.category_id,
        productJson.price,
        productJson.image_path,
        productJson.battery,
        productJson.processor
      )
    } else if (productJson.category_id == 3) {
      return new FashionProduct(
        productJson.id,
        productJson.name,
        productJson.description,
        productJson.category_id,
        productJson.price,
        productJson.image_path,
        productJson.size,
        productJson.color
      )
    }
  }
}
