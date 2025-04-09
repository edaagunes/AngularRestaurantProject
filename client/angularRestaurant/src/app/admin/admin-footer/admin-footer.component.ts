import { Component, ElementRef, ViewChild } from '@angular/core';
import { FooterService } from '../../_services/footer.service';
import { FooterModel } from '../../_models/footer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-footer',
  standalone: false,
  templateUrl: './admin-footer.component.html',
  styleUrl: './admin-footer.component.css'
})
export class AdminFooterComponent {
@ViewChild('createModalCloseBtn') createModalCloseBtn: ElementRef;
@ViewChild('editModalCloseBtn') editModalCloseBtn: ElementRef;

constructor(private footerService: FooterService) {
this.getFooter();
}

footerList: FooterModel[];
footer:FooterModel = new FooterModel();
editFooter:any={};
errors: any={};

getFooter()
{
  this.footerService.getAll().subscribe({
    next: values => this.footerList = values,
    error: error => console.log(error)
  });
}

create()
{
  this.footerService.create(this.footer).subscribe({
    next: value => {
      this.footer = new FooterModel();
      this.errors = {};
      this.getFooter();
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

onSelected(footer: FooterModel) {
  this.editFooter = { ...footer }; // kopya objeyle çalış
  this.errors = {}; // hataları da temizle
}

update()
{
  this.footerService.update(this.editFooter.footerAddressId, this.editFooter).subscribe({
    next: res => {
      this.getFooter();
      this.editFooter = {}; // formu temizle
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
          this.footerService.delete(id).subscribe({
            error: err => console.log(err),
            complete: () =>  {
              Swal.fire({
              title: "Silindi!",
              text: "Footer Silindi!",
              icon: "success"
            }).then(()=>this.getFooter());
          }
          })
        }
      });
}
}

