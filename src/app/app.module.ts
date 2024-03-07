import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientsService } from './services/clients.service';
import { ClientsFormComponent } from './components/clients-form/clients-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    ClientsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
