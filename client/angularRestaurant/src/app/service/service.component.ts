import { Component } from '@angular/core';
import { ServiceModel } from '../_models/service';
import { ServiceService } from '../_services/service.service';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
 constructor(private serviceService: ServiceService) {
  this.getServices();
  }

   serviceList: ServiceModel[];
   getServices()
    {
      this.serviceService.getAll().subscribe({
        next: values => this.serviceList = values,
        error: error => console.log(error)
      });
    }
}
