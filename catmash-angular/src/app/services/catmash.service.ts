import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { RootObject } from '../model/cats.score';

@Injectable({
  providedIn: 'root',
})

export class CatMashService {

    private catMashUrl = 'https://webapp-181103163839.azurewebsites.net/catmash-web/cats';
    private updateScoreUrl = 'https://webapp-181103163839.azurewebsites.net/catmash-web/updateScore';

    constructor(private http: HttpClient) { }

    getCats(): Observable<RootObject[]> {
        return this.http.get<RootObject[]>(this.catMashUrl);
    }

    updateScore(id, url): Observable<String> {
        var fullUpdateSocreURl = this.updateScoreUrl + '?id=' + id + '&url=' + url;
        return this.http.get<String>(fullUpdateSocreURl);
    }
}