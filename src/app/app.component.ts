import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Parallax } from 'materialize-css';

@Component({
  selector: 'ngi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  profileImageUrl: string;
  parallaxImageUrl: string;

  constructor() {
    this.profileImageUrl = './../assets/images/rozhon.jpeg';
    this.parallaxImageUrl = './../assets/images/parallax.jpg';
  }

  @ViewChild('parallax')
  parallax: ElementRef;

  ngAfterViewInit(): void {
    // initialize materialize components
    Parallax.init(this.parallax.nativeElement);
  }
}
