import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservationModel } from '../_models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

    baseUrl = "https://localhost:7160/api/reservations/";

    getAll()
    {
      return this.http.get<ReservationModel[]>(this.baseUrl);
    }

    create(model)
    {
      return this.http.post<ReservationModel>(this.baseUrl,model);
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
