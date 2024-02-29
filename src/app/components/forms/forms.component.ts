import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../types/location.interface';
import { FilterUnitsService } from './../../services/filter-units.service';
import { NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgClass],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {

  @Output() submitEvent = new EventEmitter();

  results: Location[] = [];
  filteredResults: Location[] = []; // Inicialize como um array vazio
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private unitService: GetUnitsService, 
    private filterUnitsService: FilterUnitsService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    });
    

    this.unitService.getAllUnits().subscribe(data => {
      this.results = data;
      this.filteredResults = []; //Caso precise mudar [] para data Inicialize como um array vazio ao carregar os dados

      this.formGroup.reset()

      console.log(data)

    });
  }

  onSubmit(): void {
    let { showClosed, hour } = this.formGroup.value;
    this.filteredResults = this.filterUnitsService.filter(this.results, showClosed, hour);
    this.unitService.setFillteredUnits(this.filteredResults);

    this.submitEvent.emit();
  }

  onClean(): void {
    this.formGroup.reset();
    this.filteredResults = []; // Reinicialize como um array vazio ao limpar o formulário
    
  }
}
