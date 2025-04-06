import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceModel } from '../_models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

   baseUrl = "https://localhost:7160/api/services/";

   getAll()
   {
     return this.http.get<ServiceModel[]>(this.baseUrl);
   }

   create(model)
   {
     return this.http.post<ServiceModel>(this.baseUrl,model);
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
