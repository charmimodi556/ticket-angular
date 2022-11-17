import { Component, OnInit } from '@angular/core';
import { VisitorsRegistrationService } from '../visitors-registration.service';

@Component({
  selector: 'app-list-visitors',
  templateUrl: './list-visitors.component.html',
  styleUrls: ['./list-visitors.component.css']
})
export class ListVisitorsComponent implements OnInit {
  visitors:any;

  constructor(private service: VisitorsRegistrationService) { }

  ngOnInit() {
    let response = this.service.getVisitors();
   response.subscribe((data)=>this.visitors=data);
  }

}
