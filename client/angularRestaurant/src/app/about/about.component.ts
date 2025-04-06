import { AboutService } from './../_services/about.service';
import { Component } from '@angular/core';
import { AboutModel } from '../_models/about';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private aboutService: AboutService) {
  this.getAbouts();
  }

  aboutList: AboutModel[];
  getAbouts()
  {
    this.aboutService.getAll().subscribe({
      next: values => this.aboutList = values,
      error: error => console.log(error)
    });
  }
}
