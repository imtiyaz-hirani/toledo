import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCourseDetailsComponent } from './single-course-details.component';

describe('SingleCourseDetailsComponent', () => {
  let component: SingleCourseDetailsComponent;
  let fixture: ComponentFixture<SingleCourseDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleCourseDetailsComponent]
    });
    fixture = TestBed.createComponent(SingleCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
