export interface Games {
 name: string;
 data: Data[];
}

interface Data {
    name:string;
    games:game[];
}

interface game {
    id:string;
    name:string;
    image:string;
    tags:Tags[];
}

interface Tags {
    name:string;
    color:string;
    url:string;
}