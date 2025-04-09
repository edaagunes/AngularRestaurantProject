import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceModel } from '../../_models/service';
import { ServiceService } from '../../_services/service.service';

@Component({
  selector: 'app-admin-service',
  standalone: false,
  templateUrl: './admin-service.component.html',
  styleUrl: './admin-service.component.css'
})
export class AdminServiceComponent {
@ViewChild('createModalCloseBtn') createModalCloseBtn: ElementRef;
@ViewChild('editModalCloseBtn') editModalCloseBtn: ElementRef;

constructor(private serviceService: ServiceService) {
this.getService();
}

ServiceList: ServiceModel[];
Service:ServiceModel = new ServiceModel();
editService:any={};
errors: any={};

getService()
{
  this.serviceService.getAll().subscribe({
    next: values => this.ServiceList = values,
    error: error => console.log(error)
  });
}

create()
{
  this.serviceService.create(this.Service).subscribe({
    next: value => {
      this.Service = new ServiceModel();
      this.errors = {};
      this.getService();
      this.createModalCloseBtn.nativeElement.click(); // modalı manuel kapat
    },
    error: err => {
      if (err.status === 400) {
        console.log(err.error.errors);
        this.errors = err.error.errors;
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

onSelected(Service: ServiceModel) {
  this.editService = { ...Service }; // kopya objeyle çalış
  this.errors = {}; // hataları da temizle
}

update()
{
  this.serviceService.update(this.editService.serviceId, this.editService).subscribe({
    next: res => {
      this.getService();
      this.editService = {}; // formu temizle
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
          this.serviceService.delete(id).subscribe({
            error: err => console.log(err),
            complete: () =>  {
              Swal.fire({
              title: "Silindi!",
              text: "Hakkımızda Silindi!",
              icon: "success"
            }).then(()=>this.getService());
          }
          })
        }
      });
}
}
