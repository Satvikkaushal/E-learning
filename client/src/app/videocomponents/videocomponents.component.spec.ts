import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocomponentsComponent } from './videocomponents.component';

describe('VideocomponentsComponent', () => {
  let component: VideocomponentsComponent;
  let fixture: ComponentFixture<VideocomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
