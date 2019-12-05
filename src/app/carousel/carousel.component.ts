import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  h1Style: boolean = false;
  title = 'owlcarouselinAngular';  
  Images = ['../assets/images/image1.jpg', '../assets/images/image2.jpg', '../assets/images/image3.jpg']; 
  SlideOptions = { items: 1, dots: true, nav: true, navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right></i>']};  
  CarouselOptions = { items: 3, dots: true, nav: true };

  constructor() { }

  ngOnInit() {
  }
  firstClick(){
    this.h1Style = true;
  }

}
