import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ClientRESTService {

  constructor(
    private http: Http
  ) { }

  url = "http://187.188.122.85:8091/NutriNET/Cliente/"

  newClient(obj){
    return this.http.post(this.url, obj)
    .pipe(map((res:Response)=>res.json()))
  }

  showClient(){
    return this.http.get(this.url)
    .pipe(map((res:Response)=>res.json()))
  }

  oneClient(id){
    return this.http.get(this.url + id)
    .pipe(map((res:Response)=>res.json()))
  }

  editClient(obj){
    return this.http.put(this.url + obj.Cliente_ID, obj)
    .pipe(map((res:Response)=>res.json()))
  }
}
