import { Component, ElementRef, ViewChild } from '@angular/core';
import { AboutService } from '../../_services/about.service';
import { AboutModel } from '../../_models/about';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-about',
  standalone: false,
  templateUrl: './admin-about.component.html',
  styleUrl: './admin-about.component.css'
})
export class AdminAboutComponent {

@ViewChild('createModalCloseBtn') createModalCloseBtn: ElementRef;
@ViewChild('editModalCloseBtn') editModalCloseBtn: ElementRef;

constructor(private aboutService: AboutService) {
this.getAbout();
}

aboutList: AboutModel[];
about:AboutModel = new AboutModel();
editAbout:any={};
errors: any={};

getAbout()
{
  this.aboutService.getAll().subscribe({
    next: values => this.aboutList = values,
    error: error => console.log(error)
  });
}

create()
{
  this.aboutService.create(this.about).subscribe({
    next: value => {
      this.about = new AboutModel();
      this.errors = {};
      this.getAbout();
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

onSelected(about: AboutModel) {
  this.editAbout = { ...about }; // kopya objeyle çalış
  this.errors = {}; // hataları da temizle
}

update()
{
  this.aboutService.update(this.editAbout.id, this.editAbout).subscribe({
    next: res => {
      this.getAbout();
      this.editAbout = {}; // formu temizle
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
          this.aboutService.delete(id).subscribe({
            error: err => console.log(err),
            complete: () =>  {
              Swal.fire({
              title: "Silindi!",
              text: "Hakkımızda Silindi!",
              icon: "success"
            }).then(()=>this.getAbout());
          }
          })
        }
      });
}
}
