import { Component, OnInit } from '@angular/core';
import Course from 'src/app/models/Course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses-grid-page',
  templateUrl: './courses-grid-page.component.html',
  styleUrls: ['./courses-grid-page.component.scss']
})
export class CoursesGridPageComponent implements OnInit {
    courses: Course[]=[]
    constructor(private courseService: CourseService){

    }

    ngOnInit(): void {
        this.courseService.getAllCourses().subscribe(data=>{
            this.courses = data;
            this.courses.forEach(c=>{
                this.courseService.getModulesByCourseId(c._id)
                        .subscribe(data=>{
                            c.modules = data
                        })
                })
        });
    }
}
