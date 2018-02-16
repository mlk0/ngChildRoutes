import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'

import { Http } from "@angular/http";
import { HttpClient } from '@angular/common/http';

import { IPhoto } from '../models/photo';
import { IPhotoX, PhotoX } from '../models/photoX';


@Injectable()
export class PhotoService {

  constructor(private http: Http,
    private httpClient: HttpClient) { }

  LoadPhotosNew(): Observable<IPhotoX[]> {
    //This will not result in any errors if the server sends you bad objects because of 2 reasons.
    //1. At compile time the transpiler does not know what the server will send.
    //2. At runtime all type information is erased since everything gets compiled to javascript.
    let result = this.httpClient.get<IPhotoX[]>('https://jsonplaceholder.typicode.com/photos');
    return result;
  }


  LoadPhotosNewX(): Observable<PhotoX[]> {
    //This will not result in any errors if the server sends you bad objects because of 2 reasons.
    //1. At compile time the transpiler does not know what the server will send.
    //2. At runtime all type information is erased since everything gets compiled to javascript.
    let result = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/photos');
let photoXObservableOfArray =  result.map(r=>{
  let photoXArray = r.map(p=>{
    let photoX = new PhotoX(
        p.albumId, 
        p.id, 
        p.title, 
        p.url
    );
    return photoX;
  })
  return photoXArray;
});
  
    
   
    return photoXObservableOfArray;
  }

  LoadPhotosNew2(): Observable<Object> {
    let result = this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
    return result;
  }

//casting json to IPhoto[] - preserves the original object
  LoadPhotos(): Observable<IPhoto[]> {
    let result: Observable<IPhoto[]>;

    result = this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map((r) => {
        if (r.status == 200) {
          let jsonPhotos = <IPhoto[]>r.json();
          return jsonPhotos;
        }
        else {
          return Observable.of(null)
        }
      })
      .catch(error => {
        console.log(error);
        return Observable.of(null);
      })

    return result;
  }


//explicit creation of IPhotoX instances
  LoadPhotosX(): Observable<IPhotoX[]> {
    let result: Observable<IPhotoX[]>;

    result = this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map((r) => {
        if (r.status == 200) {
          let jsonPhotos = <any[]>r.json();
          let photosArray = jsonPhotos.map(p=>{
            let ph =<IPhotoX>p;
            
            let photoX = <IPhotoX>{
              id : ph.id,
              albumId : ph.albumId,
              title : ph.title,
              url: ph.url
            }

            return photoX;

          })
          //return jsonPhotos;
          return photosArray;
        }
        else {
          return Observable.of(null)
        }
      })
      .catch(error => {
        console.log(error);
        return Observable.of(null);
      })

    return result;
  }



//explicit creation of PhotX instances through the usage of a constructor
  LoadPhotosY(): Observable<PhotoX[]> {
    let result: Observable<PhotoX[]>;

    result = this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map((r) => {
        if (r.status == 200) {

          //cast to any[] just to get acces to Array
          let jsonPhotos = <any[]>r.json(); 
          
          let photosArray = jsonPhotos.map(p=>{
            
            //note that:
            //there is no support for named parameters
            //therefore the order is important
            let photoX = new PhotoX(
              p.albumId, 
              p.id, 
              p.title, 
              p.url);
 
              return photoX;

          })
          //return jsonPhotos;
          return photosArray;
        }
        else {
          return Observable.of(null)
        }
      })
      .catch(error => {
        console.log(error);
        return Observable.of(null);
      })

    return result;
  }



}
