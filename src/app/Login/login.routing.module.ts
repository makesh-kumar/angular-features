import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { customCanDeActivateGuard } from '../Guards/custom.guard';
import { LoginComponent } from '../Login/login-component';

const loginRoutes: Routes = [{ path: '', component: LoginComponent,
canDeactivate: [customCanDeActivateGuard],
}];
@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
