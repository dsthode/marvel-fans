import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wrapper } from '../models/wrapper';
import { API_KEY } from './api-key';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  static SERVICE_URL = "http://gateway.marvel.com/v1/public/characters";

  constructor(private http: HttpClient) { }

  getAll(offset:number): Observable<Wrapper> {
    return this.http.get<Wrapper>(
      CharacterService.SERVICE_URL,
      {
        params: {
          apikey: API_KEY,
          offset: `${offset}`
        }
      }
    );
  }

  get(id: number): Observable<Wrapper> {
    return this.http.get<Wrapper>(
      `${CharacterService.SERVICE_URL}/${id}`,
      {
        params: {
          apikey: API_KEY
        }
      }
    );
  }
}
