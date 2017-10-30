import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { twitt } from '../../commons/twitt';

import { Profile } from '../../commons/profile';

@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html'
})
export class ProfilePage {
	twits:Array<twitt>=[
		{img:"https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314",nick_name:"@Json_",text:"Este es mi primer texto"}
	,{img:"https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314",nick_name:"@Json_",text:"Este es mi segundo texto"}
	,{img:"https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314",nick_name:"@Json_",text:"Este es mi tercer texto"}
	];
	
	me:Profile={
		img:"https://scontent-bog1-1.xx.fbcdn.net/v/t31.0-8/q85/c0.32.851.315/p851x315/16143501_10154932307544819_2112696325829089220_o.jpg?oh=31b701f71831e2a7845e64f3098437a3&oe=5A50F8C2",
		nick_name:"@Json_",
		interaction:"1",
		github:"brm-jbarraganj",
		twitter:"@Jasson_",
		medium:"@Jasson_",
		bio:"Aquí deberia tener una descripción larga de lo que sea",
	}
	constructor(public navCtrl: NavController){

	}

}
