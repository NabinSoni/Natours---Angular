import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackageComponentComponent } from './package-component/package-component.component';
import { BookingComponentComponent } from './booking-component/booking-component.component';
import { EditBookingComponentComponent } from './booking-component/edit-booking-component/edit-booking-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageComponentComponent,
    BookingComponentComponent,
    EditBookingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
