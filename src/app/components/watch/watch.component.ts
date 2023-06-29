import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
  constructor(private activateRoute: ActivatedRoute){}
  ngOnInit(){
  const title = this.activateRoute.snapshot.paramMap.get("id")
  
}





}