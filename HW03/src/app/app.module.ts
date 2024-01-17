import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangingBlockComponent } from './changing-block/changing-block.component';
import { FormsModule } from '@angular/forms';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangingBlockComponent,
    VehicleInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
