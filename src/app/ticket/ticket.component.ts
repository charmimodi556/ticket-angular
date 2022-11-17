import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketRegistrationService } from '../ticket-registration.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket: Ticket = new Ticket(0,"",0,0);
  message:any;

  constructor(private service: TicketRegistrationService) { }

  ngOnInit() {
  }

  public registerNow(){
    let response = this.service.doRegistration(this.ticket); 
    response.subscribe((data)=>this.message=data);
   }

}
