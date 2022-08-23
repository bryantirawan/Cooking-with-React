import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogbreedpicturesService } from './dogbreedpictures.service'; 

@Component({
  selector: 'app-picsofdogbreed',
  templateUrl: './picsofdogbreed.component.html',
  styleUrls: ['./picsofdogbreed.component.css']
})
export class PicsofdogbreedComponent implements OnInit {
  breedPicData: any; 
  title:string  = 'Pics of dog breed';
  breed: any;
  constructor(private route: ActivatedRoute, private data: DogbreedpicturesService){}
  ngOnInit() 
  {
    this.breed = this.route.snapshot.params['breed'];

    this.data.getBreedPicsByParameter().subscribe((result) => {
      this.breedPicData = result
    })
  }
}

