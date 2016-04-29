import {Component} from 'angular2/core';
import {NgComponent} from '../ng-component';

@Component({
  selector: 'demo-app',
  template: `
<h2>Basic Example</h2>
<ng-component>Loading...</ng-component>
`,
  directives: [NgComponent]
})
export class DemoAppComponent { }
