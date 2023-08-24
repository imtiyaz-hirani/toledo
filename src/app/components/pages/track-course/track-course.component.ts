import { Component, Input, OnInit } from '@angular/core';
import Course from 'src/app/models/Course';
import { Module } from 'src/app/models/Module';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-track-course',
  templateUrl: './track-course.component.html',
  styleUrls: ['./track-course.component.scss']
})
export class TrackCourseComponent implements OnInit{

    @Input()
    trackId: String;
    courses: Course[]=[];
    modules: Module[];
    constructor(private courseService: CourseService){

    }
    ngOnInit(): void {
        this.courseService.getCourses(this.trackId).subscribe(data=>{
            this.courses = data;
            this.courses.forEach(c=>{
                 this.courseService.getModulesByCourseId(c._id).subscribe(data=>{
                    this.modules = data;
                 })
               c.modules = this.modules;
            })
        });


    }
}
