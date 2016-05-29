import { Component } from '@angular/core';
import { NgComponent } from '../index';

@Component({
  directives: [NgComponent],
  selector: 'demo',
  template: `
    <h2>Basic Example</h2>
    <ng-component>Loading...</ng-component>`
})
export class DemoComponent { }
