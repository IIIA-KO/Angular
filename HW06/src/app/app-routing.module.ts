import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { FamousLandmarkComponent } from './famous-landmark/famous-landmark.component';
import { OtherLandmarksComponent } from './other-landmarks/other-landmarks.component';
import { CityPhotosComponent } from './city-photos/city-photos.component';
import { authGuard } from './auth.guard';
import { CityRoutingModuleModule } from './city-routing-module/city-routing-module.module';

const routes: Routes = [
  { path: '', redirectTo: '/city', pathMatch: 'full' },
  { path: 'city', component: CityComponent },
  { path: 'famous-landmark', component: FamousLandmarkComponent },
  { path: 'other-landmarks', component: OtherLandmarksComponent },
  { path: 'city-photos', component: CityPhotosComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CityRoutingModuleModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
