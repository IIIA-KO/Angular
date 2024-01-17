import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from '../city/city.component';
import { OverViewComponent } from '../over-view/over-view.component';
import { HistoryComponent } from '../history/history.component';

const routes: Routes = [
  {
    path: '',
    component: CityComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverViewComponent },
      { path: 'history', component: HistoryComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CityRoutingModuleModule { }