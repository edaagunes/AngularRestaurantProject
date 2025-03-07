import { Component } from '@angular/core';
import { About } from '../_models/about';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
about: About = {id:1, title: 'Hakkımızda', description: 'Hakkımızda açıklaması'}
about2: About = {id:2, title: 'Hakkımızda 2', description: 'Hakkımızda açıklaması 2'}
about3: About = {id:3, title: 'Hakkımızda 3', description: 'Hakkımızda açıklaması 3'}
about4: About = {id:4, title: 'Hakkımızda 4', description: 'Hakkımızda açıklaması 4'}

abouts: About[] = [this.about, this.about2, this.about3, this.about4]
}
