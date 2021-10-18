import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResultFiltersComponent } from './components/result-filters/result-filters.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    ResultPageComponent,
    NavbarComponent,
    ResultFiltersComponent,
    ResultItemComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
