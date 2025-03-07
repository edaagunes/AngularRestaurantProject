import { CategoryModel } from './../_models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  baseUrl = "https://localhost:7160/api/categories/";

  getCategories(){
    return this.http.get<CategoryModel[]>(this.baseUrl);
  }


getById(id)
{
  return this.http.get<CategoryModel>(this.baseUrl+id);
}

create(model:CategoryModel)
{
  return this.http.post<CategoryModel>(this.baseUrl,model);
}

update(id,model)
{
  return this.http.put(this.baseUrl+id,model);
}

delete(id)
{
  return this.http.delete(this.baseUrl+id);
}

}
