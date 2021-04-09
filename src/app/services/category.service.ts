import { Injectable } from '@angular/core';
import { Category } from '../models/category';

interface CategoryJson {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories = [
    {
      id: 1,
      name: 'Software'
    },
    {
      id: 2,
      name: 'Mobile Devices'
    },
    {
      id: 3,
      name: 'Fashion'
    },
  ]

  constructor() { }

  getCategories(): Category[] {
    return this.categories.map(category => Category.fromJson(category))
  }

  private static fromJson(categoryJson: CategoryJson) : Category {
    return new Category(categoryJson.id, categoryJson.name)
  }
}
