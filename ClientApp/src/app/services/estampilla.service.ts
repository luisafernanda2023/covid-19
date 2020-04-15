import { Injectable, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {estampilla} from '../covid-19/models/estampilla';
import {observable, Observable,}  from 'rxjs';
import {catchError, tap }from 'rxjs/operators';
import {handlehttptrrorservice}from '../@base/handle.error.service';


@Injectable({

  providedIn: 'root'
  
  })
  
  export class estampillaService {
  
  baseUrl: string;
  
  constructor(
  
  private http: HttpClient,
  
  @Inject('BASE_URL') baseUrl: string,
  
  private handleErrorService: HandleHttpErrorService)
  
  {
  
  this.baseUrl = baseUrl;
  
  }
  
  get(): Observable<estampilla[]> {
  
  return this.http.get<estampilla[]>(this.baseUrl + 'api/estampilla')
  
  .pipe(
  
  tap(_ => this.handleErrorService.log('datos enviados')),
  
  catchError(this.handleErrorService.handleError<estampilla[]>('Consulta estampilla', null))
  
  );
  
  }
  
  post(estampilla: estampilla): Observable<estampilla> {
  
  return this.http.post<estampilla>(this.baseUrl + 'api/estampilla', estampilla)
  
  .pipe(
  
  tap(_ => this.handleErrorService.log('datos enviados')),
  
  catchError(this.handleErrorService.handleError<estampilla>('Registrar estampilla', null))
  
  );
  
  }
  
  }