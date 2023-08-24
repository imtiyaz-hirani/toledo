import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Course from 'src/app/models/Course';
import { CourseService } from 'src/app/services/course.service';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

    courses:Course[]= [];

    constructor(
        public router: Router, private courseService: CourseService
    ) { }

    ngOnInit(): void {
        //  this.courseService.getAllCourses().subscribe((data)=>{
        //     this.courses=data;
        //  })
    }

    // for tab click event
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }
}
