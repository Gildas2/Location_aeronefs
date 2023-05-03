import { Component, OnInit } from '@angular/core';
import { IAero } from '../shared/models/hotel';
import { AeroListService } from '../shared/services/aero-list.service';

@Component ({
  selector: 'app-hotel-list',
  templateUrl: './aero-list.component.html',
  styleUrls: ['./aero-list.component.css']
})
export class AeroListComponent implements OnInit{
  public title = 'Liste Aéronefs';

  public aeros: IAero[] = [];

  private _aeroFilter = 'mot';

  public filteredAeros: IAero[] = [];

  public errMsg: string = '';

  ngOnInit() {
    this.hoteListService.getAeros().subscribe({
      next: aeros => {
      this.aeros = aeros;
      this.filteredAeros = this.aeros;
      },
      error: err => this.errMsg = err
    });
    this.aeroFilter = '';
  }

  public get aeroFilter(): string{
    return this._aeroFilter;
  }

  public set aeroFilter(filter: string){
    this._aeroFilter = filter;

    this.filteredAeros = this.aeroFilter ? this.filterHotels(this.aeroFilter) : this.aeros;
  }

  //les services
  constructor(private hoteListService: AeroListService){}

  private filterHotels(criteria: string): IAero[] {
    criteria = criteria.toLocaleLowerCase();

    const res = this.aeros.filter(
      (aero: IAero) => aero.AeroName.toLocaleLowerCase().indexOf(criteria) !== -1
    );

    return res;
  }
}
