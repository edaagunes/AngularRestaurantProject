import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuModel } from '../_models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://localhost:7160/api/menus/";

  getAll()
  {
    return this.http.get<MenuModel[]>(this.baseUrl);
  }

  create(model)
  {
    return this.http.post<MenuModel>(this.baseUrl,model);
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
