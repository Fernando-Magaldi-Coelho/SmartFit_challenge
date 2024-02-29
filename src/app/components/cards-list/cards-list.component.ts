import { Component, Input, OnInit } from '@angular/core';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../types/location.interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FormsComponent } from '../forms/forms.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent, 
    FormsComponent, 
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    CardsListComponent,
    CardComponent,
    FormsModule],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent implements OnInit{

  @Input() unitsList: Location[] = [];
  
  constructor(){

  }

  ngOnInit(): void {
    console.log(this.unitsList)
  }

}
