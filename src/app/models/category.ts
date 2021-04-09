interface CategoryJson {
  id: number;
  name: string;
}
 
export class Category {
  constructor(public id: number,
              public name: String) {}

  public static fromJson(categotyJson: CategoryJson) : Category {
    return new Category(categotyJson.id, categotyJson.name)
  }
}
