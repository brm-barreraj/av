import { Component } from '@angular/core';
import { Notification } from '../../commons/notification';
import	{ VerNotificationPage } from './verNotification'

import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-notification',
	templateUrl: 'notification.html'
})
export class NotificationPage {
	cositos:Array<Notification>=[
		{img:"https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314",nick_name:"@Json_",text:"Este es mi tercer texto",action:"reply"},
		{img:"https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314",nick_name:"@Json_",text:"Este es mi tercer texto",action:"retwitt"},
		{img:"https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p40x40/15826598_10154899150024819_3661600197604000239_n.jpg?oh=f3f3a7a89fa62146b0a3ab7819b53bdc&oe=5A836314",nick_name:"@Json_",text:"Este es mi tercer texto",action:"mention"}
	];
	constructor(public navCtrl: NavController){

	}
	verNotification(noti:Notification){
		this.navCtrl.push(VerNotificationPage,{
		 	id:noti
		});
	}

}


