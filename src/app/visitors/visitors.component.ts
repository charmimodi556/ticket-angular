import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
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
  message:any;

  constructor(private service: VisitorsRegistrationService) { }

  ngOnInit() {
  }

  public registerNow(){
    let response = this.service.doRegistration(this.visitor); 
    response.subscribe((data)=>this.message=data);
   }

}
