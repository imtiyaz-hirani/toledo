import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import Course from 'src/app/models/Course';
import { Module } from 'src/app/models/Module';
import Video from 'src/app/models/Video';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-single-course-details',
  templateUrl: './single-course-details.component.html',
  styleUrls: ['./single-course-details.component.scss']
})
export class SingleCourseDetailsComponent implements OnInit {
    trackId: String;
    courseId: String;
    course: Course;
    modules: Module[] =[]
    videos: Video[]=[];
    url: any;
    constructor(private courseService: CourseService,
        private route: ActivatedRoute ,
        protected sanitizer: DomSanitizer){}

    ngOnInit(): void {

        this.route.paramMap.subscribe( paramMap => {
            this.courseId = paramMap.get('courseId');
            this.trackId = paramMap.get('trackId');
            this.courseService.getCourseById(this.courseId)
                .subscribe(data=>{
                    this.course = data;
                    this.url=this.sanitizer.bypassSecurityTrustResourceUrl("https://player.vimeo.com/video/"+ this.course.introVideoCode)
                    this.url = this.url.changingThisBreaksApplicationSecurity;
                     this.courseService.getModulesByCourseId(this.course._id)
                        .subscribe(data=>{
                            this.modules = data;
                            this.course.modules = this.modules;
                            this.modules.forEach(m=>{
                                this.courseService.getVideosByModuleId(m._id)
                                    .subscribe(data=>{
                                        m.videos = data;
                                        let contentLength = this.courseService.getContentLength(data);
                                        m.contentLength = contentLength;
                                    })
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
