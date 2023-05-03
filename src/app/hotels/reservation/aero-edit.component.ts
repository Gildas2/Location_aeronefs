import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, FormControlName, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, fromEvent, merge, EMPTY, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

import { IAero } from '../shared/models/hotel';
import { AeroListService } from '../shared/services/aero-list.service';
import { NumberValidators } from '../shared/validators/number.validator';
import { GenericGlobalValidator } from '../shared/validators/generic-global.validator';
import { User } from './user';

@Component({
  selector: 'app-aero-edit',
  templateUrl: './aero-edit.component.html',
  styleUrls: ['./aero-edit.component.css']
})
export class AeroEditComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) inputElements: ElementRef[];

  public aeroForm!: FormGroup;
  public errorMessage: string = '';
  public formErrors: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } } = {
    nom: {
      required: 'Le nom de l\'hôtel est obligatoire.',
      minlength: 'Le nom de l\'hôtel doit comporter au moins trois caractères.',
      maxlength: 'Le nom de l\'hôtel ne peut pas dépasser 50 caractères.'
    },
    prenom: {
      required: 'Le nom de l\'hôtel est obligatoire.',
      minlength: 'Le nom de l\'hôtel doit comporter au moins trois caractères.',
      maxlength: 'Le nom de l\'hôtel ne peut pas dépasser 50 caractères.'
    },

  };
  public aero: IAero = { id: 0, AeroName: '', description: '', price: 0, imageUrl:''};

  public pageTitle: string = '';

  public user: User = new User();

  private isFormSubmitted: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private aeroService: AeroListService,
  ) {
    this.inputElements = [];
   }


  ngOnInit(): void {

    this.aeroForm = this.fb.group({
      nom : [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],
      prenom : [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],
      tags: this.fb.array([]),
    });

    this.route.paramMap.subscribe(params => {
      const id = +(<string>params.get('id'));

      this.getSelectedHotel(id);
    })
  }

  public hideErrorMessage(): void {
    this.errorMessage = '';
  }

  public getSelectedHotel(id: number): void {
    this.aeroService.getAeroById(id).subscribe({
      next: (hotel: IAero) => this.displayHotel(hotel),
      error: (err) => this.errorMessage = err
    });
  }

  public displayHotel(aero: IAero): void {
    this.aero = aero;

    if (this.aero.id === 0) {
      this.pageTitle = 'Louer un aéronef';
    } else {
      this.pageTitle = `Louer ${this.aero.AeroName}`;
    }

    this.aeroForm.patchValue({
      aeroName: this.aero.AeroName,
      price: this.aero.price,
      description: this.aero.description,
    });
  }


  public saveHotel(aeroForm: NgForm): void{
    console.log(aeroForm.form);
    console.log('valeurs: ', JSON.stringify(aeroForm.value));
  }
}

