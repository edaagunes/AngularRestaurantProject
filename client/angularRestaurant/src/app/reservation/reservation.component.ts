import { Component } from '@angular/core';
import { ReservationService } from '../_services/reservation.service';
import { ReservationModel } from '../_models/reservation';

@Component({
  selector: 'app-reservation',
  standalone: false,
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  constructor(private reservationService: ReservationService) {
  this.getReservations();
  }

  reservationList: ReservationModel[];
  reservation:ReservationModel = new ReservationModel();
  editReservation:any={};

  getReservations()
  {
    this.reservationService.getAll().subscribe({
      next: values => this.reservationList = values,
      error: error => console.log(error)
    });
  }

  create()
  {
    console.log('Gönderilen veri:', this.reservation);
    console.log('Kişi Sayısı Tipi:', typeof this.reservation.peopleCount);

    this.reservation.peopleCount = parseInt(this.reservation.peopleCount as any, 10);

    this.reservationService.create(this.reservation).subscribe({
      next: value => {
        this.reservationList.push(value);
        this.reservation = new ReservationModel(); // formu temizle
      },
      error: error => console.log(error)
    });
  }

  update()
{
  this.reservationService.update(this.editReservation.id,this.editReservation).subscribe({
    error: error => console.log(error)
  })
}

delete(id)
{
  this.reservationService.delete(id).subscribe({
    error:error => console.log(error),
    complete:()=>this.getReservations()
  })
}
}
