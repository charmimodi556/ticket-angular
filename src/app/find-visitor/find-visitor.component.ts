import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { Visitor } from '../visitor';
import { VisitorsRegistrationService } from '../visitors-registration.service';

@Component({
  selector: 'app-find-visitor',
  templateUrl: './find-visitor.component.html',
  styleUrls: ['./find-visitor.component.css']
})
export class FindVisitorComponent implements OnInit {

  ticket: Ticket = new Ticket(0,"",0,0);
  visitor: Visitor = new Visitor(0,"",0,this.ticket);

  visitors:any;

  constructor(private service: VisitorsRegistrationService) { }

  ngOnInit() {
  }

  public findVisitorDetail(visitor: Visitor){
    let response= this.service.findVisitor(visitor.vname);
    response.subscribe((data)=>this.visitors=data);
    //window.location.reload();
  }

}
