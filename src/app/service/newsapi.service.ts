import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = 'https://newsapi.org/v2/top-headlines?pageSize=100&';
  allNewsApiUrl = 'https://newsapi.org/v2/everything?q=';
  apiKey = '&apiKey=dcacebfb62d744b799abd633bb63d0a1';

  topHeadlines(country: string, category: string):Observable<any> {

    return this._http.get(this.newsApiUrl + country + category + this.apiKey);

  }

  everything(keyword: string):Observable<any> {

    return this._http.get(this.allNewsApiUrl + keyword + this.apiKey);

  }
}