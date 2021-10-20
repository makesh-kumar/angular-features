import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';
import {
  customCanActivaChildteGuard,
  customCanActivateGuard,
  customCanDeActivateGuard,
  customCanLoadGuard,
  customResolveGuard,
} from './Guards/custom.guard';
import { ByeComponent, HelloComponent, HiComponent } from './hello.component';

const routes: Routes = [
  {
    path: 'hello',

    component: HelloComponent,
    resolve: { res: customResolveGuard },
    canActivateChild: [customCanActivaChildteGuard],
    canDeactivate: [customCanDeActivateGuard],

    children: [
      { path: 'hi', component: HiComponent },
      { path: 'bye', component: ByeComponent },
    ],
  },

  {
    path: 'login',
    canActivate: [customCanActivateGuard],
    canLoad: [customCanLoadGuard],
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
