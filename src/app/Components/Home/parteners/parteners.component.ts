import { Component } from '@angular/core';

@Component({
  selector: 'app-parteners',
  templateUrl: './parteners.component.html',
  styleUrls: ['./parteners.component.css']
})
export class PartenersComponent {
  constructor(){}
  imageObject:Array<object> =[{
    image:'/assets/slide1.png',
    thumbImage:'/assets/slide1.png',
  },{
    image:'/assets/slide2.png',
    thumbImage:'/assets/slide2.png',
  },{
    image:'/assets/slide3.png',
    thumbImage:'/assets/slide3.png',
  },{
    image:'/assets/slide4.png',
    thumbImage:'/assets/slide4.png',
  }
  ,{
    image:'/assets/slide5.png',
    thumbImage:'/assets/slide5.png',
  }
  ,{
    image:'/assets/slide6.png',
    thumbImage:'/assets/slide6.png',
  },{
    image:'/assets/slide7.png',
    thumbImage:'/assets/slide7.png',
  }]

}