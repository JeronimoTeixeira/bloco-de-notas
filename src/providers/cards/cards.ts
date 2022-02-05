import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the CardsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardsProvider {

  constructor(private http: HttpClient) {
  }

  get(){
    return this.http.get('./cards/cards.json').subscribe(response => {
      console.log(response)
    });
  }




}
