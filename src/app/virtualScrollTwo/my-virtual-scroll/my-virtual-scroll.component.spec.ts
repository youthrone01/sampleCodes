import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVirtualScrollComponent } from './my-virtual-scroll.component';

describe('MyVirtualScrollComponent', () => {
  let component: MyVirtualScrollComponent;
  let fixture: ComponentFixture<MyVirtualScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVirtualScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
