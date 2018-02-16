export interface IPhotoX {
    albumId : number;
    id : number;
    title : string;
    url : string
}


export class PhotoX {
    constructor(
    private albumId : number,
    private id : number,
    private title : string,
    private url : string
    ){}

}