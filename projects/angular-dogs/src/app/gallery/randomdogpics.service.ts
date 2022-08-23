import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomdogpicsService {
  url = "https://dog.ceo/api/breeds/image/random/3"
    constructor(private http:HttpClient) { }
    getThreeRandom()
    {
      return this.http.get(this.url)
    }
}
