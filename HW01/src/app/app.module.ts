import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipePipe } from './date-pipe.pipe';
import { DataPipeTestComponent } from './data-pipe-test/data-pipe-test.component';
import { SumFormatTestComponent } from './sum-format-test/sum-format-test.component';
import { SumFormatPipe } from './sum-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatePipePipe,
    DataPipeTestComponent,
    SumFormatTestComponent,
    SumFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
