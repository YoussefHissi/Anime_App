import { Component } from '@angular/core';
import { ServicedataService } from 'src/app/services/servicedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service:ServicedataService){
    this.showdata()
  }
  showdata(){
    this.service.getdata().subscribe((res:any)=>{
      console.log(res)
    })
  }

}
