import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../Login/login-component';
import { LoginRoutingModule } from '../Login/login.routing.module';

@NgModule({
  imports: [RouterModule, LoginRoutingModule],
  declarations: [LoginComponent],
  exports: [],
})
export class LoginModule {}
