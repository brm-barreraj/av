import { Component } from '@angular/core';
import { 
NavController,
AlertController, LoadingController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { UserService } from '../../services/mocks/user.service'; 
import { RequestService } from '../../services/request.service'; 

@Component({
	selector : 'page-login',
	templateUrl : 'login.html'
})

export class LoginPage{
	
	user = { email :'', password : ''}

	constructor(private alertCtrl:AlertController, public loadingCtrl:LoadingController, public navCtrl:NavController, private userService:UserService, private request:RequestService){}

	ngOnInit(){
		let json='token=34221068&consulta=getDepartamentos&isRedirect=NO&pageRedirect=&pageError=&callback=getDepartamentos';
		this.request.postp('https://www.avantel.co/funcionalidadmiavantel/consultasgenerales.du',json)
			.subscribe(
				result=> {
				console.log(result,'resultado request');
				console.log(result.object.token,'resultado token');
			},
			(error) =>  {
				console.log(error,'error');
				
			});
		//user = this.find(email,password);
		//console.log(this.user,'resultado antes de enviar');
		//return Promise.resolve("this.user");

			/*.then(response => {
					console.log(response,'Respeusta ');
					if( response != undefined){
						console.log(response);
						//this.navCtrl.push(TabsPage);
					}else{
						// let alert = this.alertCtrl.create({
						// 	title:'Login',
						// 	subTitle:'Usuario y/o contraseña incorrecta',
						// 	buttons: ['Aceptar']
						// });
						//alert.present();
					}

				}
			);*/

		console.log('arranco el inti');
		//si el usuairo esta logueado redireccionar a home
	}

	login=():void=>{
		if(this.user.email !='' && this.user.password !=''){

			let loading = this.loadingCtrl.create({
			content:'please wait....'
			});
			loading.present();

			this.userService.loginUser(this.user.email, this.user.password)
			.then(response => {
					loading.dismiss();
					console.log(response,'Respeusta ');
					if( response != undefined){
						console.log(response);
						//this.navCtrl.push(TabsPage);
					}else{
						// let alert = this.alertCtrl.create({
						// 	title:'Login',
						// 	subTitle:'Usuario y/o contraseña incorrecta',
						// 	buttons: ['Aceptar']
						// });
						//alert.present();
					}

				}
			);

		}else{
			let alert = this.alertCtrl.create({
				title:'Login',
				subTitle:'Usuario y contraseña requeridas',
				buttons: ['Aceptar']
			});
			alert.present();
		}

	}

} 