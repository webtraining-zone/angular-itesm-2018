import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {VehiclesComponent} from './vehicles/vehicles.component';
import {VehiclesService} from './vehicles/services/vehicles.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [VehiclesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
