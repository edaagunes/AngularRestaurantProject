import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReservationService } from '../../_services/reservation.service';
import { ReservationModel } from '../../_models/reservation';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-reservation',
  standalone: false,
  templateUrl: './admin-reservation.component.html',
  styleUrl: './admin-reservation.component.css'
})
export class AdminReservationComponent {

@ViewChild('createModalCloseBtn') createModalCloseBtn: ElementRef;
@ViewChild('editModalCloseBtn') editModalCloseBtn: ElementRef;

constructor(private reservationService: ReservationService) {
this.getReservation();
}

reservationList: ReservationModel[];
reservation:ReservationModel = new ReservationModel();
editReservation:any={};
errors: any={};

getReservation()
{
  this.reservationService.getAll().subscribe({
    next: values => this.reservationList = values,
    error: error => console.log(error)
  });
}

create()
{
  if (!this.reservation.description?.trim()) {
    this.reservation.description = null;
  }

  this.reservationService.create(this.reservation).subscribe({
    next: value => {
      this.reservation = new ReservationModel();
      this.errors = {};
      this.getReservation();
      this.createModalCloseBtn.nativeElement.click(); // modalı manuel kapat
    },
    error: err => {
      if (err.status === 400 && err.error?.errors) {
        console.log(err.error.errors);
        this.errors = err.error.errors;
        console.log(Object.keys(err.error.errors));
      }
    },
    complete: () => {
      Swal.fire({
        title: "Eklendi!",
        icon: "success"
      });
    }
  });
}

onSelected(reservation: ReservationModel) {
  this.editReservation = { ...reservation }; // kopya objeyle çalış
  this.errors = {}; // hataları da temizle
}

update()
{
  if (!this.editReservation.description?.trim()) {
    this.editReservation.description = null;
  }

  this.reservationService.update(this.editReservation.reservationId, this.editReservation).subscribe({
    next: res => {
      this.getReservation();
      this.editReservation = {}; // formu temizle
      this.errors = {};
      this.editModalCloseBtn.nativeElement.click(); // modalı manuel kapat
      Swal.fire({
        title: "Güncellendi!",
        icon: "success"
      });
    },
    error: err => {
      if (err.status === 400) {
        this.errors = err.error.errors;
        console.log("Validasyon hataları:", this.errors);
      } else {
        console.log("Sunucu hatası:", err);
      }
    }
  });
}

delete(id)
{
  Swal.fire({
        title: "Silmek istediğinize emin misiniz?",
        text: "Bu işlemi geri alamazsınız!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Evet, Sil!",
        cancelButtonText: "İptal"
      }).then((result) => {
        if (result.isConfirmed) {
          this.reservationService.delete(id).subscribe({
            error: err => console.log(err),
            complete: () =>  {
              Swal.fire({
              title: "Silindi!",
              text: "Rezervasyon Silindi!",
              icon: "success"
            }).then(()=>this.getReservation());
          }
          })
        }
      });
}

toggleStatus(reservation: ReservationModel) {
  this.reservationService.toggleActive(reservation.reservationId!).subscribe({
    next: updated => {
      reservation.isActive = updated.isActive; // güncel durumu yerinde değiştir
    },
    error: err => console.log(err)
  });
}

}
