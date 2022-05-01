import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
 private headers = new HttpHeaders({'Content-Type': 'application/json'})
  getCustomer(emailId:string){
    let url:string="http://localhost:8765/mosaic/login/"+emailId;
    return this.http.get<User>(url);
  }
  addCustomer(user:User):Observable<any>{
    let url:string="http://localhost:8765/mosaic/registration"
    return this.http.post(url,user,{headers:this.headers,responseType:'text' as 'json'});
  }
  constructor(private http: HttpClient) { }
}
