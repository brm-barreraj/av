import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { Notification } from '../../commons/notification';

@Component({
	selector:'ver-notification',
	template:`
			<ion-header>
			  <ion-navbar>
			    <ion-title>
			     	Notification
			    </ion-title>
			  </ion-navbar>
			</ion-header>

			<ion-content padding>
						<ion-thumbnail item-left>
							<img src="{{notification.img}}">
						</ion-thumbnail>
						<h5>{{notification.action}}</h5>
						<h2>{{notification.nick_name}}</h2>
						<p>{{notification.text}}</p>

			</ion-content>
	`
})

export class VerNotificationPage{
	notification:{};

	constructor(private navParams:NavParams){
		this.notification = navParams.get('id');
	}
}