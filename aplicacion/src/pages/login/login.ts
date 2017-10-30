import { Component } from '@angular/core';
import { 
NavController,
AlertController, LoadingController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

//import { UserService } from '../../services/mocks/user.service'; 
import { RequestService } from '../../services/request.service'; 

import { Utilities } from '../../services/utilities';

import { LoginSession } from '../../commons/loginSession';

@Component({
	selector : 'page-login',
	templateUrl : 'login.html'
})

export class LoginPage {
	
	user = { email :'', password : ''};
	d:LoginSession = {
		token : "",
		nombreCliente : "",
		idUsuario : "",
		perfil :  ""
	};

	constructor(private alertCtrl:AlertController, public loadingCtrl:LoadingController, public navCtrl:NavController, /*private userService:UserService,*/ private request:RequestService, public utilities:Utilities){}

	ngOnInit(){
		if(this.utilities.validateSession()){
			this.navCtrl.push(TabsPage);
		}
		let json='token=34221068&consulta=getDepartamentos&isRedirect=NO&pageRedirect=&pageError=';
		//let json='token=34221068&consulta=getDepartamentos&isRedirect=NO&pageRedirect=&pageError=&callback=getDepartamentos';
		this.request.post('https://www.avantel.co/funcionalidadmiavantel/consultasgenerales.du',json)
			.subscribe(
				result=> {
				console.log(result,'resultado request');
			},
			(error) =>  {
				console.log(error,'error');		
			});
		console.log('arranco el inti');
		//si el usuairo esta logueado redireccionar a home
	}

	login=():void=>{
		if(this.user.email !='' && this.user.password !=''){
			let loading = this.loadingCtrl.create({
			content:'please wait....'
			});
			loading.present();

			let json='usuario='+this.user.email+'&clave='+this.user.password+'&token=&consulta=LOGIN&isRedirect=NO&pageRedirect=&pageError=';
			this.request.post('https://www.avantel.co/funcionalidadmiavantel/login.du',json)
			.subscribe(
				result=> {
					console.log(result,'resultado request login');
					loading.dismiss();
					if(result.object.token != undefined ){
							this.d.token = result.object.token.token;
							this.d.nombreCliente = result.object.datosTelefono["0"].nombreCliente;
							this.d.idUsuario = result.object.datosTelefono["0"].idUsuario;
							this.d.perfil = result.object.datosTelefono["0"].roles.toString();
							console.log(this.d,'interface de inicio de sesion');
							this.utilities.setSession(this.d);
							this.navCtrl.push(TabsPage);
					}else{
						 let alert = this.alertCtrl.create({
						 	title:'Login',
						 	subTitle:'Usuario y/o contraseña incorrecta',
						 	buttons: ['Aceptar']
						 });
						alert.present();
					}
			},
			(error) =>  {
				console.log(error,'error login');
			});
		}else{
			let alert = this.alertCtrl.create({
				title:'Login',
				subTitle:'Usuario y contraseña requeridas',
				buttons: ['Aceptar']
			});
			alert.present();
		}

	}

	signin=():void=>{
		let json='token=34221068&consulta=getDepartamentos&isRedirect=NO&pageRedirect=&pageError=';
		//let json='token=34221068&consulta=getDepartamentos&isRedirect=NO&pageRedirect=&pageError=&callback=getDepartamentos';
		this.request.postp('https://www.avantel.co/funcionalidadmiavantel/consultasgenerales.du',json)
			.subscribe(
				result=> {
				console.log(result,'resultado request');
			},
			(error) =>  {
				console.log(error,'error');
			});
	}

} 