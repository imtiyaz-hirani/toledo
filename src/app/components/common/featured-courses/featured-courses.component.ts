import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Track from 'src/app/models/Track';
import { CourseService } from 'src/app/services/course.service';

@Component({
    selector: 'app-featured-courses',
    templateUrl: './featured-courses.component.html',
    styleUrls: ['./featured-courses.component.scss']
})
export class FeaturedCoursesComponent implements OnInit{
    tracks: Track[]=[];
    constructor(
        public router: Router, private courseService: CourseService
    ) { }

    ngOnInit(): void {
         this.courseService.getAllTracks().subscribe(data=>{
            this.tracks = data;

         });

    }

}
