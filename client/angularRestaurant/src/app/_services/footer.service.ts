import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FooterModel } from '../_models/footer';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

 constructor(private http: HttpClient) { }

   baseUrl = "https://localhost:7160/api/footeraddresses/";

   getAll()
   {
     return this.http.get<FooterModel[]>(this.baseUrl);
   }

   create(model)
   {
     return this.http.post<FooterModel>(this.baseUrl,model);
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

