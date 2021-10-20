import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent, HiComponent } from './hello.component';

const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
    children: [
      { path: 'hi', component: HiComponent },
      { path: 'hello', component: HelloComponent },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Login/login.module').then((mod) => mod.LoginModule),
  },
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
