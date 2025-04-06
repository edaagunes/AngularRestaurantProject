import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChefModel } from '../_models/chef';

@Injectable({
  providedIn: 'root'
})
export class ChefService {

 constructor(private http: HttpClient) { }

   baseUrl = "https://localhost:7160/api/chefs/";

   getAll()
   {
     return this.http.get<ChefModel[]>(this.baseUrl);
   }

   create(model)
   {
     return this.http.post<ChefModel>(this.baseUrl,model);
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
