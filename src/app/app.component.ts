import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  log:boolean=false;
  title = 'mosaic';
  reset(){
    window.sessionStorage.clear();
    window.location.reload();
  }
  ngOnInit() {
    console.log(this.log);
    console.log(sessionStorage.getItem('flag'));
    if(sessionStorage.getItem('flag')=='true'){
      this.log=true;
      console.log(this.log);
    }
  }
}
