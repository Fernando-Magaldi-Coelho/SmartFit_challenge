import { UnitsResponse } from '../types/units-reponse.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Location } from '../types/location.interface';

@Injectable({
  providedIn: 'root'
})
export class GetUnitsService {

  readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

  private allUnitsSubjects: BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>([]);
  private allUnits$: Observable<Location[]> = this.allUnitsSubjects.asObservable(); //busca todos os dados e salva propriedades que forem observable coloca o $ no final
  private filterUnits: Location[] = [] //quando precisar filtrar retorna esse

  constructor(private HttpClient: HttpClient) { 
    this.HttpClient.get<UnitsResponse>(this.apiUrl).subscribe(data => {
      this.allUnitsSubjects.next(data.locations);
      this.filterUnits = data.locations;
    });
  }

  getAllUnits(): Observable<Location[]> {
    return this.allUnits$;
  }

  getFillteredUnits() {
    return this.filterUnits;
  }

  setFillteredUnits(value: Location[]){
    this.filterUnits = value;
  };

}
