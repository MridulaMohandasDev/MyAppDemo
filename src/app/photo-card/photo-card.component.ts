
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Photos } from '../photoservice.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.css'
})
export class PhotoCardComponent implements OnInit {
  @Input()
  photos!: Photos;
  @Input()
  index!: Number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.photos);
  }

}
