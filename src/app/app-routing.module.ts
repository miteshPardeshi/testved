import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OfficeListComponent } from './components/office-list/office-list.component';
import { AddOfficeComponent } from './components/office-list/add-office.component';


const routes: Routes = [{
  'path': 'dashboard',
  'component': DashboardComponent
}, {
  'path': '',
  'redirectTo': '/dashboard',
  'pathMatch': 'full',
}, {
  'path': 'officeList',
  'component': OfficeListComponent
}, {
  'path': 'editoffice/:id ',
  'pathMatch': 'full',
  'component': AddOfficeComponent
}, {
  'path': 'addoffice',
  'pathMatch': 'full',
  'component': AddOfficeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
