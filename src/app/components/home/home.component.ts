import { Component } from '@angular/core';
import { ServicedataService } from 'src/app/services/servicedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  films:any
  currentPage = 1;
  constructor(private service:ServicedataService){
    this.showdata()
  }
  showdata(){
    this.service.getdata().subscribe((res:any)=>{
      console.log(res)
      this.films=res
    })
  }


  filterbyScore(event:any){
    let value=event.target.value;

    if(value=="9 or Higher"){ 
    const filterbyscore = this.films.filter((film:any) => film.score >= 9);
    this.films=filterbyscore
    }

      if(value=="8 or Higher"){ 
      const filterbyscore = this.films.filter((film:any) => film.score >= 8);
      this.films=filterbyscore
      }

      if(value=="7 or Higher"){ 
        const filterbyscore = this.films.filter((film:any) => film.score >= 7);
        this.films=filterbyscore
        }

      if(value=="6 or Higher"){ 
          const filterbyscore = this.films.filter((film:any) => film.score >= 6);
          this.films=filterbyscore
          }
      if(value=="5 or Higher"){ 
            const filterbyscore = this.films.filter((film:any) => film.score >= 5);
            this.films=filterbyscore
            }
      if(value=="4 or Higher"){ 
              const filterbyscore = this.films.filter((film:any) => film.score >= 4);
              this.films=filterbyscore
              }

  }

}
