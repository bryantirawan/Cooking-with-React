import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DogbreedpicturesService {
  breed: any;
  url = "https://dog.ceo/api/breed/hound/images/random/3"
  
    constructor(private route: ActivatedRoute, private http:HttpClient) { }
    getBreedPics()
    {
      return this.http.get(this.url)
    }
    getBreedPicsByParameter()
    {

      this.route.queryParams.subscribe(params => {
        this.breed = params['breed'];
        
        
      });
      let paramURL = `https://dog.ceo/api/breed/${this.breed}/images/random/3`;

      return this.http.get(paramURL)
      
    }
}
