import { Component, OnInit } from '@angular/core';
import { PhotoserviceService } from '../photoservice.service';
import { CommonModule } from '@angular/common';
import { PhotoCardComponent } from '../photo-card/photo-card.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, PhotoCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  photos: any;

  
  constructor(readonly photoService: PhotoserviceService) { }

  ngOnInit(): void {
    this.photos = (this.photoService.photos);
    console.log(this.photos)
  }

  

}
