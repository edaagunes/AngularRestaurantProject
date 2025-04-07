import { Component } from '@angular/core';
import { FooterModel } from '../_models/footer';
import { FooterService } from '../_services/footer.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
constructor(private footerService: FooterService) {
  this.getFooters();
  }

  footerList: FooterModel[];
  getFooters()
  {
    this.footerService.getAll().subscribe({
      next: values => this.footerList = values,
      error: error => console.log(error)
    });
  }
}
