import { NgModule } from '@angular/core';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AeroListComponent } from './aero-list/aero-list.component';
import { AeroDetailsComponent } from './aero-detail/aero-details.component';
import { SharedModule } from '../shared/shared.module';
import { HotelRoutingModule } from './hotel-routing.module';
import { AeroEditComponent } from './reservation/aero-edit.component';
import { FormsModule } from '@angular/forms';
import { HotelData } from './shared/api/hotel.data';


@NgModule({
  declarations: [
    AeroListComponent,
    AeroDetailsComponent,
    AeroEditComponent
  ],
  imports: [
   SharedModule,
   HotelRoutingModule,
   FormsModule,
   InMemoryWebApiModule.forFeature(HotelData)
  ]
})
export class HotelModule { }
