import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <h1>Login Component </h1>
  `,
})
export class LoginComponent {
  canExit() {
    return confirm('are u sure ?');
  }
}
