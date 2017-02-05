import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyComponentModule } from '../src/my-component.module';

import { DemoComponent }  from './demo.component';

@NgModule({
  imports:      [ BrowserModule, MyComponentModule ],
  declarations: [ DemoComponent ],
  bootstrap:    [ DemoComponent ]
})
export class DemoModule { }
