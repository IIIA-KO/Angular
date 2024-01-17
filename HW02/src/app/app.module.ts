import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniquestringPipe } from './uniquestring.pipe';
import { UniquetestComponent } from './uniquetest/uniquetest.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductslistcategoryComponent } from './productslistcategory/productslistcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    UniquestringPipe,
    UniquetestComponent,
    ProductslistComponent,
    ProductslistcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
