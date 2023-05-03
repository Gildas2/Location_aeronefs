import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { AeroEditComponent } from '../../reservation/aero-edit.component';

@Injectable({
  providedIn: 'root'
})
export class HotelEditGuard implements CanDeactivate<AeroEditComponent> {

  canDeactivate(component: AeroEditComponent): boolean {
    if (component.aeroForm.dirty) {
      const hotelName = component.aeroForm.get('aeroName')?.value || 'Nouveau Hotel';
      return confirm(`Voulez-vous annuler les changements effectués sur ${hotelName} ?`)
    }
    return true;
  }
}
