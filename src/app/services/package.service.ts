import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import { Package } from '../models/package.model';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) {}

  fetchPosts() {      
    return this.http
      .get<{ [key: string]: Package }>(
        'https://localhost:44343/',
        {         
          responseType: 'json'
        }
      )      
  }
}
