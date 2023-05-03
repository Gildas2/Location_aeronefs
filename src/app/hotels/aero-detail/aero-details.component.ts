import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelData } from '../shared/api/hotel.data';
import { IAero } from '../shared/models/hotel';
import { AeroListService } from '../shared/services/aero-list.service';


@Component({
  selector: 'app-aero-details',
  templateUrl: './aero-details.component.html',
  styleUrls: ['./aero-details.component.css']
})
export class AeroDetailsComponent implements OnInit {

  public aero?: IAero = <IAero>{};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private aeroService : AeroListService
  ) { }

  ngOnInit(): void {
    const id: number = +(<string>this.route.snapshot.paramMap.get('id'));

    this.aeroService.getAeros().subscribe((aeros: IAero[]) => {
        this.aero = aeros.find((aero: IAero) => aero.id === id);
    })
  }

  public backToList(): void {
    this.router.navigate(['/aeros']);
  }

}
