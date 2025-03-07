import { CategoryModel } from "./category";

export class MenuModel{
  id;
  title;
  imageUrl;
  price;
  description;
  categoryId;
  category:CategoryModel;
}
