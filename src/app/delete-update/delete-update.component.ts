import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketRegistrationService } from '../ticket-registration.service';

@Component({
  selector: 'app-delete-update',
  templateUrl: './delete-update.component.html',
  styleUrls: ['./delete-update.component.css']
})
export class DeleteUpdateComponent implements OnInit {

  tickets:any;

  constructor(private service: TicketRegistrationService) { }

  ngOnInit() {
    let response = this.service.getTickets();
   response.subscribe((data)=>this.tickets=data);
  }

  public deleteTicket(id:number){
    let response= this.service.delTicket(id);
    response.subscribe((data)=>this.tickets=data);
    window.location.reload();
   }

   public updateTicket(ticket:Ticket){
    let response= this.service.updTicket(ticket);
    response.subscribe((data)=>this.tickets=data);
    window.location.reload();
   }
   

}
