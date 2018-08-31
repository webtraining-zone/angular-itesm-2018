import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {VehiclesComponent} from './vehicles/vehicles.component';
import {VehiclesService} from './vehicles/services/vehicles.service';
import {HttpClientModule} from '@angular/common/http';
import { FixImagePipe } from './fix-image.pipe';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VehiclesComponent,
    FixImagePipe,
    VehicleCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [VehiclesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
