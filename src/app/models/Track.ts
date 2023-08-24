import Listing from "./Listing";
import { Point } from "./Point";

export default class Track{
    code: String;
    name : String;
    _id: String;
     fee: Number;
     sequence: Number;
     points: Point[];
     listing: Listing;
     img: String;
     __v: Number;
     featured: Boolean;
     numOfCourses: Number;
     language?: String;
     reviews?: Review[];
     description?: String;
}



class Review{
    reviewMsg: String;
    name: String;
    username?: String;
    rating?: Number;
    college?: String;
    featured?: Boolean
}
