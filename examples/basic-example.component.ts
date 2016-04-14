import {Component} from 'angular2/core';
import {NgComponent} from '../ng.component';

@Component({
  selector: 'basic-example',
  template: `
<h2>Basic Example</h2>
<ng-component>Loading...</ng-component>
`,
  directives: [NgComponent]
})
export class BasicExampleComponent { }
