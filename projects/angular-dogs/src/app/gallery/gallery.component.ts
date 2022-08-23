import { Component, OnInit } from '@angular/core';
import { RandomdogpicsService } from './randomdogpics.service';
import { MatDialog } from '@angular/material/dialog'; 
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  picData: any;
  title:string  = 'Random dog pics';


  constructor(private threeRandomData: RandomdogpicsService, public dialog: MatDialog){}
  
  openDialog(dogUrl:any) {
    this.dialog.open(DialogModalComponent, {data: {url: dogUrl}});
  }
  

  
  ngOnInit() 
  {
    this.threeRandomData.getThreeRandom().subscribe((result) => {
      this.picData = result
    })
  }
}






