import { Component } from '@angular/core';
import { NgComponent } from '../ng-component';

@Component({
  selector: 'demo',
  template: `
    <h2>Basic Example</h2>
    <ng-component>Loading...</ng-component>`,
  directives: [NgComponent]
})
export class DemoComponent { }
