import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IAero } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class AeroListService {

  private readonly HOTEL_API_URL = 'api/hotels'
  constructor(private http: HttpClient) { }

  public getAeros(): Observable<IAero[]> {
    return this.http.get<IAero[]>(this.HOTEL_API_URL).pipe(
      catchError(this.handleHttpError)
    );
  }

  public getAeroById(id: number): Observable<IAero> {

    return this.http.get<IAero>(`${this.HOTEL_API_URL}/${id}`).pipe(
      catchError(this.handleHttpError)
    );
  }


  private handleHttpError(err: HttpErrorResponse) {
    let error: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', err.error.message);
      error = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${err.status}, ` +
        `body was: ${err.error}`
      );
      error = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.'
      + '\n'
      + error
    );
  }
}
