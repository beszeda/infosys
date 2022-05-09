import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Munka } from 'backend/src/entity/Munka';
import { catchError, first, Observable, throwError } from 'rxjs';
import { Feladat } from '../models/Feladat';

@Injectable({
  providedIn: 'root'
})
export class FeladatServiceService {

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  }

  constructor(private http: HttpClient) { }


  getFeladat(): Observable<Feladat[]>{
    return this.http.get<Feladat[]>('/api/feladatok', {responseType: 'json'}).pipe(
      catchError(this.ErrorHandler)
    );
  }

  addFeladat(formData: Partial<Feladat>, munkaid:Number): Observable<Feladat> {

    return this.http.post<Feladat>('/api/feladatok', { id: formData.id, nev:formData.nev, munka:munkaid  }, this.httpOptions).pipe(
      first(),
      
      catchError(this.ErrorHandler)
    );
  }

  delFeladat(id: Pick<Feladat, 'id'>): Observable<{}> {

    return this.http.delete<Feladat>('/api/feladatok/'+id,this.httpOptions ).pipe(
      catchError(this.ErrorHandler)
    );
  }


  private ErrorHandler(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}