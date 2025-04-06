import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutModel } from '../_models/about';

@Injectable({
  providedIn: 'root'
})

export class AboutService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://localhost:7160/api/abouts/";

  getAll()
  {
    return this.http.get<AboutModel[]>(this.baseUrl);
  }

  create(model)
  {
    return this.http.post<AboutModel>(this.baseUrl,model);
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

