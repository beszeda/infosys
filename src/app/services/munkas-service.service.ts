import { HttpClient, HttpErrorResponse,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, Observable, throwError } from 'rxjs';
import { Munkas } from '../models/Munkas';

@Injectable({
  providedIn: 'root'
})
export class MunkasServiceService {

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  }

  constructor(private http: HttpClient) { }


  getMunkas(): Observable<Munkas[]>{
    return this.http.get<Munkas[]>('/api/munkasok', {responseType: 'json'}).pipe(
      catchError(this.ErrorHandler)
    );
  }

  delMunkas(id: Pick<Munkas, 'id'>): Observable<{}> {

    return this.http.delete<Munkas>('/api/munkasok/'+id,this.httpOptions ).pipe(
      catchError(this.ErrorHandler)
    );
  }

  addMunkas(formData: Partial<Munkas>): Observable<Munkas> {

    return this.http.post<Munkas>('/api/munkasok/', {id: formData.id, firstName: formData.firstName, lastName: formData.lastName, oraber: formData.oraber, szakkepzetseg: formData.szakkepzetseg, statusz: formData.statusz}, this.httpOptions).pipe(
      first(),
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