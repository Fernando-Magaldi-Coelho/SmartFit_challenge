import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { Location } from './types/location.interface';
import { GetUnitsService } from './services/get-units.service';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FormsComponent, 
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    CardsListComponent,
    CardComponent,
    FormsModule,
    SubtitleComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'desafio-smartfit';

  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitService: GetUnitsService){ }

  onSubmit(){
    this.unitsList = this.unitService.getFillteredUnits();
    this.showList.next(true);
  }
}
