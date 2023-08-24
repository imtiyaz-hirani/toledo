import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environment';
import Course from '../models/Course';
import Track from '../models/Track';
import {tracks} from '../data/track';
import { of } from 'rxjs';
import { courses } from '../data/course';
import { modules } from '../data/module';
import { Module } from '../models/Module';
import { videos } from '../data/video';
import Video from '../models/Video';

 @Injectable({
  providedIn: 'root'
})
export class CourseService {


   constructor(private http: HttpClient) { }

  public getAllCourses(): Observable<Course[]>{
   //return this.http.get<Course[]>('https://techskillsit-node-backend.vercel.app/api/course/all')
    return of(courses)
}

  public getAllTracks(): Observable<Track[]>{
      return of(tracks);
    //return this.http.get<Track[]>(environment.serverUrl +'/track/all')
  }

  public getTrackById(id: any):Observable<Track> {
    return of(tracks.find(t=>t._id == id));
}

public getCourses(trackId: String) : Observable<Course[]>{
    return of(courses.filter(c=>c.trackId == trackId).sort((a,b)=>Number(a.sequence) - Number(b.sequence)));
}

    public getModulesByCourseId(courseId: String): Observable<Module[]>{
        return of(modules.filter(m=>m.courseId == courseId).sort((a,b)=>Number(a.sequence) - Number(b.sequence)))
    }

    public getCourseById(courseId: String) : Observable<Course> {
         return of(courses.find(c=>c._id == courseId));
    }

    public getVideosByModuleId(mid:String):Observable<Video[]>{
        return of(videos.filter(v=>v.moduleId == mid).sort((a,b)=>a.sequence - b.sequence));
    }

    public getContentLength(data: Video[]) : number{
        let contentLength = 0;
         data.forEach(v=>{
            contentLength = contentLength + Number(v.time)
         })
         return contentLength;
    }
}
