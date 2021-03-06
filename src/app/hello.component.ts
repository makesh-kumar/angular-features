import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hello',
  template: `<h1>Hello Component</h1>
  
  <a routerLink="./hi">Hi</a>
  <a routerLink="./bye">Bye</a>


  <router-outlet></router-outlet>

  
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  constructor(private route: ActivatedRoute) {
    console.log(this.route);
  }

  canExit() {
    return confirm("are u sure ?");
  }
}

@Component({
  selector: 'hi',
  template: `<h1>Hi Component</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HiComponent {}

@Component({
  selector: 'bye',
  template: `<h1>Bye Component</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class ByeComponent {}
