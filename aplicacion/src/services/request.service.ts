import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp } from '@angular/http';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class RequestService {
  constructor(private http: Http,private _jsonp: Jsonp) {}

  public post(url:string, parameters:any):Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers, method: "post" });
    return this.http.post(url, parameters, options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  public postp(url:string, parameters:any):Observable<any> {
    return this._jsonp.get(url+'?'+parameters)
                  .map(this.extractDataP)
                  .catch(this.handleErrorP);
  }

  private extractDataP(res: Response) {
    let body = res.json();
    console.log('extracting data');
    return body ;
  }

  private handleErrorP (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error('err' + errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}