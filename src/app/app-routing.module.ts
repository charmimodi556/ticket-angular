import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUpdateComponent } from './delete-update/delete-update.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
  {path:"ticketregister",component:TicketComponent},
  {path:"delete",component:DeleteUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
