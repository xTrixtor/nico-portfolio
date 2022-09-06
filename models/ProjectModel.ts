export interface ProjectModel{
    name:string;
    desc:string;
    year:number;
    background:string;
    technologies:string[];
    finished?:boolean;
}