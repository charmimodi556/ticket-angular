import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(ticket: Ticket){
    return this.http.post("http://localhost:8080/ticket/addTicket",ticket,{responseType: 'text' as 'json'});
  }

  public getTickets(){
    return this.http.get("http://localhost:8080/ticket/");
  }

  public delTicket(id: number){
    return this.http.delete("http://localhost:8080/ticket/deleteTicket/"+id, {responseType: 'text'});
  }

  public updTicket(ticket: Ticket){
    return this.http.put("http://localhost:8080/ticket/updateTicket", ticket, {responseType: 'text' as 'json'});
  }

}
