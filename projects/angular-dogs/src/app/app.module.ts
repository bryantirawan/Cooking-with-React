import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { PicsofdogbreedComponent } from './picsofdogbreed/picsofdogbreed.component';
import { DogbreedlistComponent } from './dogbreedlist/dogbreedlist.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';

const appRoutes: Routes = [
  {path: '', component: DogbreedlistComponent},
  {path: 'picsofbreed', component: PicsofdogbreedComponent},
  {path: 'picsofbreed/:breed', component: PicsofdogbreedComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    PicsofdogbreedComponent,
    DogbreedlistComponent,
    DialogModalComponent,
  ],
  entryComponents: [GalleryComponent, DialogModalComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
