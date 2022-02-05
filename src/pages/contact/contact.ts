import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Modelo } from '../../models/card.model';
import { CardsProvider } from '../../providers/cards/cards';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {
  card: Modelo = new Modelo();
  continuar = false;
  teste: String;

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public cardProvider: CardsProvider 
    ) {
  }

  voltar(){
    this.continuar = !this.continuar;
    console.log(this.card)
    this.cardProvider.get()

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
