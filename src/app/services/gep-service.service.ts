import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, Observable, throwError } from 'rxjs';
import { Gep } from '../models/Gep';

@Injectable({
  providedIn: 'root'
})
export class GepServiceService {

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  }

  constructor(private http: HttpClient) { }

  getGepek(): Observable<Gep[]> {
    return this.http.get<Gep[]>('/api/gepek', { responseType: 'json' }).pipe(
      catchError(this.ErrorHandler)
    );
  }

  addGepek(formData: Partial<Gep>): Observable<Gep> {

    return this.http.post<Gep>('/api/gepek/', { id: formData.id, tipus: formData.tipus }, this.httpOptions).pipe(
      first(),
      catchError(this.ErrorHandler)
    );
  }

  delGepek(id: Pick<Gep, 'id'>): Observable<{}> {

    return this.http.delete<Gep>('/api/gepek/'+id,this.httpOptions ).pipe(
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
