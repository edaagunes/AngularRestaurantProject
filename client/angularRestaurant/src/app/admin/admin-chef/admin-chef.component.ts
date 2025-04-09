import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChefService } from '../../_services/chef.service';
import { ChefModel } from '../../_models/chef';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-chef',
  standalone: false,
  templateUrl: './admin-chef.component.html',
  styleUrl: './admin-chef.component.css'
})
export class AdminChefComponent {
@ViewChild('createModalCloseBtn') createModalCloseBtn: ElementRef;
@ViewChild('editModalCloseBtn') editModalCloseBtn: ElementRef;

constructor(private chefService: ChefService) {
this.getChefList();
}

chefList: ChefModel[];
chef:ChefModel = new ChefModel();
editChef:any={};
errors: any={};

getChefList()
{
  this.chefService.getAll().subscribe({
    next: values => this.chefList = values,
    error: error => console.log(error)
  });
}

create()
{
  this.chefService.create(this.chef).subscribe({
    next: value => {
      this.chef = new ChefModel();
      this.errors = {};
      this.getChefList();
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

onSelected(chef: ChefModel) {
  this.editChef = { ...chef }; // kopya objeyle çalış
  this.errors = {}; // hataları da temizle
}

update()
{
  this.chefService.update(this.editChef.id, this.editChef).subscribe({
    next: res => {
      this.getChefList();
      this.editChef = {}; // formu temizle
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
          this.chefService.delete(id).subscribe({
            error: err => console.log(err),
            complete: () =>  {
              Swal.fire({
              title: "Silindi!",
              text: "Hakkımızda Silindi!",
              icon: "success"
            }).then(()=>this.getChefList());
          }
          })
        }
      });
}
}
