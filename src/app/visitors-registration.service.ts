import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visitor } from "./visitor";

@Injectable({
  providedIn: 'root'
})
export class VisitorsRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(visitor: Visitor){
    return this.http.post("http://localhost:8080/visitors/addVisitor",visitor,{responseType: 'text' as 'json'});
  }

  public getVisitors(){
    return this.http.get("http://localhost:8080/visitors/");
  }

  public getTickets(){
    return this.http.get("http://localhost:8080/ticket/");
  }

  public findVisitor(vname: string){
    return this.http.get("http://localhost:8080/visitors/"+vname, {responseType: 'text' as 'json'});
  }

}
