import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { IPhoto } from '../models/photo';
import { IPhotoX, PhotoX } from '../models/photoX';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

   
  PhotosX: PhotoX[];
  photos: any;
  constructor(private photoService : PhotoService) { }

  ngOnInit() {
    this.getPhotosX();
    this.getPhotos();
    console.log('done')
  }

  getPhotos(){
    this.photoService.LoadPhotos().subscribe(p=>
      this.photos=p
    );
  }

  getPhotosX(){
    this.photoService.LoadPhotosNewX().subscribe(
      p=>
      this.PhotosX=p
    );
  }

}
