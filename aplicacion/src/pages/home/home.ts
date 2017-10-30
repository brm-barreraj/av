import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { twitt } from '../../commons/twitt';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	listado:Array<twitt>=[{img:"https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314",nick_name:"@Json_",text:"Este es mi primer texto"}
	,{img:"https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314",nick_name:"@Json_",text:"Este es mi segundo texto"}
	,{img:"https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314",nick_name:"@Json_",text:"Este es mi tercer texto"}];
  constructor(public navCtrl: NavController) {

  }

}

