import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicedataService } from 'src/app/services/servicedata.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
  films:any;
  title:any;
  matchingFilm:any=null;
  constructor(private activateRoute: ActivatedRoute,private service:ServicedataService){
    
  }
  ngOnInit(){
  this.title = this.activateRoute.snapshot.paramMap.get("id")
 this.showdata();
 
}

showdata(){
  this.service.getdata().subscribe((res:any)=>{
    this.films=res
    if(this.films!=undefined){
      this.filterFilms()
  }
  })
}

 filterFilms() {
 console.log("films",this.films)

  this.films.forEach((element:any) => {
    if (element.title === this.title) {
      this.matchingFilm = element;
      console.log(this.matchingFilm)
    }

  });
  return this.matchingFilm;
 
}



}