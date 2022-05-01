
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {
    window.setInterval(this.showSlides, 2000);
  }
  slideIndex:number = 0;
  
  ngOnInit(): void {
  
  }
  showSlides() {
    if(this.slideIndex==undefined) {
      this.slideIndex=0;
    }  
    var i;
    var slides = document.getElementsByClassName('containerbox') as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display="none";
      
    }
    this.slideIndex=this.slideIndex+1;

    if (this.slideIndex > slides.length) {
      this.slideIndex = 1;
    }
    slides[this.slideIndex-1].style.display="block";
    
  }
  
}
