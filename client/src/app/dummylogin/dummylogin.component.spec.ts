import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyloginComponent } from './dummylogin.component';

describe('DummyloginComponent', () => {
  let component: DummyloginComponent;
  let fixture: ComponentFixture<DummyloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
