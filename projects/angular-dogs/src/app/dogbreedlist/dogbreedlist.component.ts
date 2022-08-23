import { Component, OnInit } from '@angular/core';
import { DogbreedsService } from './dogbreeds.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dogbreedlist',
  templateUrl: './dogbreedlist.component.html',
  styleUrls: ['./dogbreedlist.component.css']
})
export class DogbreedlistComponent implements OnInit {
  data: any; 
  
  title:string  = 'Dog Breeds and Subbreeds';
  constructor(private route: Router, private breedData: DogbreedsService){}
  ngOnInit() 
  {
    this.breedData.getBreeds().subscribe((result) => {
      this.data = result;
    })
  }

}
