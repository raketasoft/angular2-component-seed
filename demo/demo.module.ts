import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DemoComponent }  from './demo.component';
import { MyComponentModule } from '../src/my-component.module';

@NgModule({
  imports: [ BrowserModule, MyComponentModule ],
  declarations: [ DemoComponent ],
  bootstrap: [ DemoComponent ]
})
export class DemoModule { }
