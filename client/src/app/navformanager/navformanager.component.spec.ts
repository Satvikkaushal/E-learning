import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavformanagerComponent } from './navformanager.component';

describe('NavformanagerComponent', () => {
  let component: NavformanagerComponent;
  let fixture: ComponentFixture<NavformanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavformanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavformanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
