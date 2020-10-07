import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: '/calendar',
  pathMatch: 'full'
},{
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
},{
  path: 'calendar',
  loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
