import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ReturnListModel, ReturnModel } from '../models/responses';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  private objectToQueryParameter(obj: any): HttpParams {
    let params: HttpParams = new HttpParams();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        params = params.set(key, element);
      }
    }
    return params;
  }
  private getUrl(url: string): string {
    return environment.baseUrl + url;
  }

  public get<T>(url: string, headers: HttpHeaders = null): Observable<ReturnModel<T>> {
    return this.httpClient.get<ReturnModel<T>>(this.getUrl(url), { headers }).pipe(map(res => res));
  }

  public simpleGet<T>(url: string, headers: HttpHeaders = null): Observable<T> {
    return this.httpClient.get<T>(this.getUrl(url), { headers }).pipe(map(res => res));
  }

  public getWithParams<T>(url: string, queryModel: any, headers: HttpHeaders = null): Observable<ReturnModel<T>> {
    return this.httpClient.get<ReturnModel<T>>(this.getUrl(url),
    { headers, params: this.objectToQueryParameter(queryModel) }).pipe(map(res => res));
  }

  public getList<T>(url: string, headers: HttpHeaders = null): Observable<ReturnListModel<T>> {
    return this.httpClient.get<ReturnListModel<T>>(this.getUrl(url), { headers }).pipe(map(res => res));
  }

  public getListWithParams<T>(url: string, queryModel: any, headers: HttpHeaders = null): Observable<ReturnListModel<T>> {
    return this.httpClient.get<ReturnListModel<T>>(this.getUrl(url),
      { headers, params: this.objectToQueryParameter(queryModel) }).pipe(map(res => res));
  }
  public post<T>(url: string, model: T, headers: HttpHeaders = null): Observable<ReturnModel<T>> {
    return this.httpClient.post<ReturnModel<T>>(this.getUrl(url), model, { headers }).pipe(map(res => res));
  }

  public postWithModel<T, X>(url: string, model: X, headers: HttpHeaders = null): Observable<ReturnModel<T>> {
    return this.httpClient.post<ReturnModel<T>>(this.getUrl(url), model, { headers }).pipe(map(res => res));
  }

  public postList<T>(url: string, model: T, headers: HttpHeaders = null): Observable<ReturnListModel<T>> {
    return this.httpClient.post<ReturnListModel<T>>(this.getUrl(url), model, { headers }).pipe(map(res => res));
  }

  public postListWithModel<T, X>(url: string, model: X, headers: HttpHeaders = null): Observable<ReturnListModel<T>> {
    return this.httpClient.post<ReturnListModel<T>>(this.getUrl(url), model, { headers }).pipe(map(res => res));
  }

  public put<T>(url: string, model: T, headers: HttpHeaders = null): Observable<ReturnModel<T>> {
    return this.httpClient.put<ReturnModel<T>>(this.getUrl(url), model, { headers }).pipe(map(res => res));
  }

  public putWithModel<T, X>(url: string, model: X, headers: HttpHeaders = null): Observable<ReturnModel<T>> {
    return this.httpClient.put<ReturnModel<T>>(this.getUrl(url), model, { headers }).pipe(map(res => res));
  }

  public putList<T>(url: string, model: T, headers: HttpHeaders = null): Observable<ReturnListModel<T>> {
    return this.httpClient.put<ReturnListModel<T>>(this.getUrl(url), model, { headers }).pipe(map(res => res));
  }

  public putListWithModel<T, X>(url: string, model: X, headers: HttpHeaders = null): Observable<ReturnListModel<T>> {
    return this.httpClient.put<ReturnListModel<T>>(this.getUrl(url), model, { headers }).pipe(map(res => res));
  }

  public delete<T>(url: string, headers: HttpHeaders = null): Observable<ReturnModel<T>> {
    return this.httpClient.delete<ReturnModel<T>>(this.getUrl(url), { headers }).pipe(map(res => res));
  }

  public deleteWithParams<T>(url: string, queryModel: any, headers: HttpHeaders = null): Observable<ReturnModel<T>> {
    return this.httpClient.delete<ReturnModel<T>>(this.getUrl(url), {
      headers,
      params: this.objectToQueryParameter(queryModel)
    }).pipe(map(res => res));
  }
}
