import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Track from 'src/app/models/Track';
 import { CourseService } from 'src/app/services/course.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    tracks: Track[]=[]

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    constructor(
        public router: Router, private courseService: CourseService
    ) { }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    searchClassApplied = false;
    toggleSearchClass() {
        this.searchClassApplied = !this.searchClassApplied;
    }

    sidebarClassApplied = false;
    toggleSidebarClass() {
        this.sidebarClassApplied = !this.sidebarClassApplied;
    }

    ngOnInit(): void {
        this.courseService.getAllTracks().subscribe(data=>{
            this.tracks = data
        })
    }
}
