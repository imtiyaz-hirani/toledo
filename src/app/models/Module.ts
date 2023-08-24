import Video from "./Video";

export class Module{
    _id: String;
    name: String;
    sequence: Number;
    courseId: String;
    __v?: Number;
    videos?: Video[];
    contentLength?: number;
}
