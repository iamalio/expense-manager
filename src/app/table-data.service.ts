import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/delay';
import { CHARACTERS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor() { }

  getCharacters(): Observable<any[]> {
    return Observable.of(CHARACTERS).delay(100);
  }
}
