import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Photos, PhotoserviceService } from '../photoservice.service';

@Component({
  selector: 'app-photo-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-details.component.html',
  styleUrl: './photo-details.component.css'
})
export class PhotoDetailsComponent  implements OnInit {
 
    photos$!: Observable<Photos | undefined>;
  
    constructor(private photosService: PhotoserviceService, private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.photos$ = this.route.paramMap.pipe(map(params => {
        return this.photosService.photos[Number(params.get('index'))]
      }))
  
      console.log(this.photos$);
    }
  
  
  

}
