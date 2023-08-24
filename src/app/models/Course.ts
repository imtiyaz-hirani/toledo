import { Module } from "./Module";
import { Point } from "./Point";

export default class Course{
    _id: String;
    name : String;
    description: String;
    shortDescription: String;
    featured?: Boolean;
    trainerId: String;
    fee: Number;
    cfeezoom?: Number;
    introVideoCode: String;
    keywords?: String;
    technicalWeightage: String;
    type?: String;
    sequence: Number;
    trackId: String;
    img?: String;
    __v?: Number;
    modules?: Module[];
    language?: String
}
