import { Component } from '@angular/core';
import { ChefService } from '../_services/chef.service';
import { ChefModel } from '../_models/chef';

@Component({
  selector: 'app-chef',
  standalone: false,
  templateUrl: './chef.component.html',
  styleUrl: './chef.component.css'
})
export class ChefComponent {
constructor(private chefService: ChefService) {
  this.getChefs();
  }

  chefList: ChefModel[];
  getChefs()
  {
    this.chefService.getAll().subscribe({
      next: values => this.chefList = values,
      error: error => console.log(error)
    });
  }
}
