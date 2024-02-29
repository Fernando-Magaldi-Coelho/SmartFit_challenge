import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../types/location.interface';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from '../cards-list/cards-list.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ CommonModule, CardsListComponent, CardComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  @Input() card!: Location;

  constructor(){ }

  ngOnInit(): void {
    
  }
}
