import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:57084/api";

  constructor(private http: HttpClient) { }

  getAllCustomers():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Customer');
  }

  addCustomer(val:any){
    return this.http.post(this.APIUrl+'/Customer',val);
  }

  editCustomer(val:any){
    return this.http.put(this.APIUrl+'/Customer',val);
  }

  getCustomerById(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl+'/Customer',val);
  }

  DeleteCustomerById(val:any){
    return this.http.delete<any>(this.APIUrl+'/Customer',val);
  }
}
