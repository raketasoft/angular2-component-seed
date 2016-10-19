/* tslint:disable:no-unused-variable */
import { DemoComponent } from './demo.component';
import { MyComponent } from '../src/my-component';

import { TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('DemoComponent with TCB', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ MyComponent, DemoComponent ]});
  });

  it('should instantiate component', () => {
    let fixture = TestBed.createComponent(DemoComponent);
    expect(fixture.componentInstance instanceof DemoComponent).toBe(true, 'should create DemoComponent');
  });

  it('should have expected <h1> text', () => {
    let fixture = TestBed.createComponent(DemoComponent);
    fixture.detectChanges();

    let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;  // it works

        h1 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred

    expect(h1.innerText).toMatch(/demo/i, '<h1> should say something about "Demo"');
  });
});
