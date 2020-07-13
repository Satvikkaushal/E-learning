import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavwithhomeComponent } from './navwithhome.component';

describe('NavwithhomeComponent', () => {
  let component: NavwithhomeComponent;
  let fixture: ComponentFixture<NavwithhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavwithhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavwithhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
