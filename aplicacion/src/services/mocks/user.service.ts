import { Injectable } from '@angular/core';

import { User } from '../../commons/user';
//import { USERS } from '../mocks/users';

//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { RequestService } from '../request.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
  
@Injectable()

export class UserService{

	public user:User;

	constructor(private request: RequestService){}

	testService(): Promise<any> {

		let json='token=34221068&consulta=getDepartamentos&isRedirect=NO&pageRedirect=&pageError=&callback=getDepartamentos';
		
		this.request.post('https://www.avantel.co/funcionalidadmiavantel/consultasgenerales.du',json)
					.subscribe(
				result=> {
				console.log(result,'resultado request');
				console.log(result.object.token,'resultado token');
			},
			(error) =>  {
				console.log(JSON.stringify(error),'error');
				
			});
		//user = this.find(email,password);
		//console.log(this.user,'resultado antes de enviar');
		return Promise.resolve("this.user");
	}

	loginUser(email : string , password : string): Promise<any> {

		let json='usuario='+email+'&clave='+password+'&token=&consulta=LOGIN&isRedirect=NO&pageRedirect=&pageError=';
		
		this.request.post('https://www.avantel.co/funcionalidadmiavantel/login.du',json)
			.subscribe(
				result=> {
				console.log(result,'resultado request');
				console.log(result.object.token,'resultado token');
				if(result.object.token != undefined){
					console.log('entra respuesta positiva');
					
					this.user.nick_name = 'nick_name';
					this.user.full_name = 'full_name';
					this.user.email = email;
					this.user.password = password;
					console.log(this.user,'usuario 2');
				}else{
					this.user=undefined;
					console.log('no creo usuario porq token = undefined');
				}
				console.log(this.user,'resultado');
			},
			(error) =>  {
				console.log(error,'error');
				
			});
		//user = this.find(email,password);
		console.log(this.user,'resultado antes de enviar');
		return Promise.resolve(this.user);
	}

/*	find(email,password):User{
		let user:User;
		user = USERS.find(x => x.email == email);
		console.log(user,'cuando no es encontrado ');
		if(user != undefined){
			if(user.password == password){
				return user;
			}else{
				return undefined;
			}
		}
	}*/
}