import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUpdateComponent } from './delete-update/delete-update.component';
import { ListVisitorsComponent } from './list-visitors/list-visitors.component';
import { TicketComponent } from './ticket/ticket.component';
import { VisitorsComponent } from './visitors/visitors.component';

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
  {path:"ticketregister",component:TicketComponent},
  {path:"delete",component:DeleteUpdateComponent},
  {path:"addvisitors",component:VisitorsComponent},
  {path:"listvisitors",component:ListVisitorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
