import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, Observable, throwError } from 'rxjs';
import { Munka } from '../models/Munka';

@Injectable({
  providedIn: 'root'
})
export class MunkaServiceService {

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  }

  constructor(private http: HttpClient) { }


  getMunka(): Observable<Munka[]>{
    return this.http.get<Munka[]>('/api/munkak', {responseType: 'json'}).pipe(
      catchError(this.ErrorHandler)
    );
  }

  addMunka(formData: Partial<Munka>): Observable<Munka> {

    return this.http.post<Munka>('/api/munkak', { id: formData.id, tipus: formData.tipus }, this.httpOptions).pipe(
      first(),
      catchError(this.ErrorHandler)
    );
  }

  delMunka(id: Pick<Munka, 'id'>): Observable<{}> {

    return this.http.delete<Munka>('/api/munkak/'+id,this.httpOptions ).pipe(
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