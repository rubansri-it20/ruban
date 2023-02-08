import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {

  constructor( private http:HttpClient) { }

  getcurrency(country1:string){
    let url ='https://api.'
  }
}
