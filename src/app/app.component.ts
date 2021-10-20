import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name = 'Makesh';
  public obj = [
    {
      name: 'Makesh',
      age: 24,
      tech: 'JS',
    },

    {
      name: 'kumar',
      age: 24,
      tech: 'JS',
    },
  ];

  onPipe() {
    this.obj.push({ name: 'test', age: 88, tech: 'kk' });
  }

  onPurePipe() {
    this.obj = [{ name: 'iii', age: 88, tech: 'oo' }];
  }

  constructor() {}

  ngOnInit() {}
}
