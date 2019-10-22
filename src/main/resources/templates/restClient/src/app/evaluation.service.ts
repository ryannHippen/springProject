import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Evaluation } from './models/evaluation';
import { Profile } from './models/profile';

const httpOption = {
  headers: new HttpHeaders({ 'Contnent-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

    //private baseUrl:string='http://localhost:8080/api';
    private baseUrl = '/api/eval';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
  };

  public getEvaluations() {
    return this.http.get<Evaluation[]>(this.baseUrl+'/evaluations');
  }

  public getEvaluation(id: number): Observable<Evaluation> {
    return this.http.get<Evaluation>(this.baseUrl+'/evaluation/'+id);
  }

  public updateEvaluation (evaluation: Evaluation) {
    return this.http.put(this.baseUrl, evaluation, this.httpOptions);
  }

  public deleteEvaluation(evaluation: Evaluation) {
    return this.http.delete(this.baseUrl+'/evaluation/'+ evaluation.evaluationId);
  }

  public addEvaluation(evaluation: Evaluation) {
    return this.http.post<Evaluation>(this.baseUrl, evaluation, this.httpOptions);
  }

  public sendEmail(evaluation: Evaluation) {
    return this.http.put(this.baseUrl+'/email', evaluation, this.httpOptions);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
