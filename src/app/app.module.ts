import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { TicketRegistrationService } from './ticket-registration.service';
import { DeleteUpdateComponent } from './delete-update/delete-update.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { VisitorsRegistrationService } from './visitors-registration.service';
import { ListVisitorsComponent } from './list-visitors/list-visitors.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    DeleteUpdateComponent,
    HeaderComponent,
    FooterComponent,
    VisitorsComponent,
    ListVisitorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TicketRegistrationService,VisitorsRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
