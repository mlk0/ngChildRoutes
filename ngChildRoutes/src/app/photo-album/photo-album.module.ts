import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { PhotoService } from './services/photo.service';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path : 'photos' , component : PhotosComponent }
    ]),
    HttpModule,
    HttpClientModule
  ],
  declarations: [PhotosComponent],
  providers : [PhotoService]
})
export class PhotoAlbumModule { }
