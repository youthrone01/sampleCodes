import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollerOneComponent } from './scroller-one.component';

describe('ScrollerOneComponent', () => {
  let component: ScrollerOneComponent;
  let fixture: ComponentFixture<ScrollerOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollerOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
