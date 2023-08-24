import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackCourseComponent } from './track-course.component';

describe('TrackCourseComponent', () => {
  let component: TrackCourseComponent;
  let fixture: ComponentFixture<TrackCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackCourseComponent]
    });
    fixture = TestBed.createComponent(TrackCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
