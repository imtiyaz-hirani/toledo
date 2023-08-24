import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Course from 'src/app/models/Course';
import { Module } from 'src/app/models/Module';
import Track from 'src/app/models/Track';
import { CourseService } from 'src/app/services/course.service';

@Component({
    selector: 'app-course-details-page',
    templateUrl: './course-details-page.component.html',
    styleUrls: ['./course-details-page.component.scss']
})
export class CourseDetailsPageComponent implements OnInit{
    track: Track;
    id: any;
    courses: Course[]=[];
    modules: Module[];

    constructor(private courseService: CourseService,private route: ActivatedRoute){}
    ngOnInit(): void {
        this.route.paramMap.subscribe( paramMap => {
            this.id = paramMap.get('trackId');
             this.courseService.getTrackById(this.id).subscribe(data=>{
                this.track = data;
                this.courseService.getCourses(this.track._id).subscribe(data=>{
                    this.courses = data;
                    this.courses.forEach(c=>{
                         this.courseService.getModulesByCourseId(c._id).subscribe(data=>{
                            this.modules = data;

                         })
                       c.modules = this.modules;
                    })
                });
             });
        })
    }
    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

    // Accordion
    contentHeight: number = 0;
    openSectionIndex: number = -1;

    toggleSection(index: number): void {
        if (this.openSectionIndex === index) {
            this.openSectionIndex = -1;
        } else {
            this.openSectionIndex = index;
            this.calculateContentHeight();
        }
    }

    isSectionOpen(index: number): boolean {
        return this.openSectionIndex === index;
    }

    calculateContentHeight(): void {
        const contentElement = document.querySelector('.accordion-content');
        if (contentElement) {
            this.contentHeight = contentElement.scrollHeight;
        }
    }

}
