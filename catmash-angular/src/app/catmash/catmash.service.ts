import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { RootObject } from './cats.score';

@Injectable({
  providedIn: 'root',
})

export class CatMashService {

    private catMashUrl = 'http://localhost:8080/catmash-web/cats';
    private updateScoreUrl = 'http://localhost:8080/catmash-web/updateScore';

    constructor(private http: HttpClient) { }

    getCats(): Observable<RootObject[]> {
        return this.http.get<RootObject[]>(this.catMashUrl);
    }

    updateScore(id, url): Observable<String> {
        var fullUpdateSocreURl = this.updateScoreUrl + '?id=' + id + '&url=' + url;
        return this.http.get<String>(fullUpdateSocreURl);
    }
}