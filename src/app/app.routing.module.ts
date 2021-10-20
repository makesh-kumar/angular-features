import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';
import { ByeComponent, HelloComponent, HiComponent } from './hello.component';

const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
    children: [
      { path: 'hi', component: HiComponent },
      { path: 'bye', component: ByeComponent },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Login/login.module').then((mod) => mod.LoginModule),
  },
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
