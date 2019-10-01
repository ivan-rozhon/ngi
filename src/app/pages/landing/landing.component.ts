import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Parallax } from 'materialize-css';

@Component({
  selector: 'ngi-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {
  profileImageUrl: string;
  parallaxImageUrl: string;

  constructor() {
    this.profileImageUrl = './../assets/images/rozhon.jpeg';
    this.parallaxImageUrl = './../assets/images/parallax.jpg';
  }

  @ViewChild('parallax', { static: true })
  parallax: ElementRef;

  ngAfterViewInit(): void {
    // initialize materialize components
    Parallax.init(this.parallax.nativeElement);
  }
}
