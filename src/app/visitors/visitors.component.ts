import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketRegistrationService } from '../ticket-registration.service';
import { Visitor } from '../visitor';
import { VisitorsRegistrationService } from '../visitors-registration.service';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent implements OnInit {

  ticket: Ticket = new Ticket(0,"",0,0);
  visitor: Visitor = new Visitor(0,"",0,this.ticket);
  tickets:any;
  message:any;

  constructor(private service: VisitorsRegistrationService) { }

  ngOnInit() {
    let response = this.service.getTickets();
   response.subscribe((data)=>this.tickets=data);
  }

  public registerNow(){
     console.log ('name: ',this.visitor.ticket.name);
    let response = this.service.doRegistration(this.visitor); 
    response.subscribe((data)=>this.message=data);
   }

}
