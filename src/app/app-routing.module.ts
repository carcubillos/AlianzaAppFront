import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientsFormComponent } from './components/clients-form/clients-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/clients', pathMatch: 'full'},
  {path: 'clients', component: ClientsListComponent},
  {path: 'clients/form', component: ClientsFormComponent},
  {path: 'clients/form/:sharedKey', component: ClientsFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
