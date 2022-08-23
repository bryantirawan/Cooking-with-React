import { Component } from '@angular/core';
import { DogbreedsService } from './dogbreedlist/dogbreeds.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any; 
  title:string  = 'Dog Breeds and Subbreeds';

  constructor(private breedData: DogbreedsService){}

  
  ngOnInit() 
  {
    this.breedData.getBreeds().subscribe((result) => {
      this.data = result
    })
  }
}




