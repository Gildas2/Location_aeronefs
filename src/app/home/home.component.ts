import { animate, animation, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {RxjsIntervalService} from "../services/rxjs-interval.service"

export interface IDocuments{
  src:string;
  name:string;
  description:string;
}

export const fadeIn=animation([
  style({opacity:0}),
  animate('2s',style({opacity:1}))
])

export const scaleIn=animation([
  style({opacity:0,transform:"scale(0.5)"}),
  animate('2s',style({opacity:1,transform:"scale(1)"}))
])


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('carouselAnimation',[
      transition('void=>*',[
       useAnimation(scaleIn)
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  public slides: IDocuments[] = [
    {
      src:
        'assets/img/Slider_1.jpg',
      name: 'burger 1 ',
      description: 'food food food food',
    },
    {
      src:
        'assets/img/Slider_2.jpg',
      name: 'burger2',
      description: 'food food food food',
    },
    {
      src:
        'assets/img/Slider_03.jpg',
      name: 'burger 3',
      description: 'food food food food',
    },
  ];

  //@Input() slides:IDocuments[] = [];
  currentIndex:number=0;
  counterValue?:string;
  time=5;
  interval?:Subscription;

  constructor(private rxjsIntervalService:RxjsIntervalService) { }

  ngOnInit(): void {
    this.initInterval()
  }

  initInterval(){
    if(this.interval){this.interval.unsubscribe()}
    this.interval=this.rxjsIntervalService.initInterval(this.time*10).subscribe((d)=>{
      this.counterValue=d.counterValue + "%";
      if(d.counterValue===100){
        this.next()
      }
    })
  }


  next(){
    if(this.currentIndex<this.slides.length-1){
      this.currentIndex++
    }else{
      this.currentIndex=0;
    }
    this.initInterval()

  }

  pre(){
    if(this.currentIndex>0){
      this.currentIndex--;
    }else{
      this.currentIndex=this.slides.length-1;
    }
    this.initInterval()
  }


  @HostListener("mouseenter")
  onMouseEnter(){
    this.rxjsIntervalService.pauseCounter();
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.rxjsIntervalService.resumeCounter();
  }
}
