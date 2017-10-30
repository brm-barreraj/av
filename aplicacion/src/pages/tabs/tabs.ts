import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NotificationPage } from '../notification/notification';
import { ProfilePage } from '../profile/profile';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {
	
	tab1Root: any = HomePage;
	tab2Root: any = NotificationPage;
	tab3Root: any = ProfilePage;

	constructor(){

	}

}