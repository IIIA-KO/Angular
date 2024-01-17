import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { FamousLandmarkComponent } from './famous-landmark/famous-landmark.component';
import { OtherLandmarksComponent } from './other-landmarks/other-landmarks.component';
import { CityPhotosComponent } from './city-photos/city-photos.component';
import { OverViewComponent } from './over-view/over-view.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    FamousLandmarkComponent,
    OtherLandmarksComponent,
    CityPhotosComponent,
    OverViewComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
