import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ // injectable instead of component decorator
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getDogs(){
    let link = 'https://dog.ceo/api/breeds/image/random'
    return this.http.get('https://cors-anywhere.herokuapp.com/' + link);
  }

  getCat(){
    let link = ' https://api.thecatapi.com/v1/images/search';
    return this.http.get( link);
  }
}