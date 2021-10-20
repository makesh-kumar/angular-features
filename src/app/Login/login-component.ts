import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <h1>Login Component </h1>
  `,
})
export class LoginComponent {
  canExit() {
    console.log('in can Exit');
    return confirm('Are you sure want to go back ?');
  }
}
