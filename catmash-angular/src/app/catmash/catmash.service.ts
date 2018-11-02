import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { RootObject } from './cats.score';

@Injectable({
  providedIn: 'root',
})

export class CatMashService {

    private catMashUrl = 'http://localhost:8080/catmash-web/cats';

    constructor(private http: HttpClient) { }

    getCats(): Observable<RootObject[]> {
        return this.http.get<RootObject[]>(this.catMashUrl)
    }
}