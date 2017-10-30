import { Injectable } from '@angular/core';
@Injectable()
export class Utilities {
  constructor() {}

  validateSession():boolean{
    if (this.getSession() == null || this.getSession().id == "") {
      return false;
    }else{
      return true;
    }
  }

  public test(){
    console.log('metodo de prueba clase Utilities');
  }

  public getSession():any{
    return JSON.parse( window.localStorage.getItem('!us3rS3ss10n#'));
  }

  public setSession(data:any):any{
    window.localStorage.setItem('!us3rS3ss10n#', JSON.stringify(data));
  }

  public deleteSession():any{
    window.localStorage.removeItem('!us3rS3ss10n#');
  }

}