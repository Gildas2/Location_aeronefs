import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HotelDetailsGuard } from './shared/guards/aero-details.guard';
import { AeroDetailsComponent } from './aero-detail/aero-details.component';
import { AeroListComponent } from './aero-list/aero-list.component';
import { AeroEditComponent } from './reservation/aero-edit.component';
import { HotelEditGuard } from './shared/guards/aero-edit.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'aeros/:id',
        component: AeroDetailsComponent,
        canActivate: [HotelDetailsGuard]
      },
      { path: 'aeros',
        component: AeroListComponent
      },
      {
        path: 'aeros/:id/edit',
        component: AeroEditComponent,
        canDeactivate: [HotelEditGuard]
      }
     ]),
  ],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
