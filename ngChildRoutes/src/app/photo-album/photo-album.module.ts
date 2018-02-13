import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path : 'photos' , component : PhotosComponent }
    ])
  ],
  declarations: [PhotosComponent]
})
export class PhotoAlbumModule { }
