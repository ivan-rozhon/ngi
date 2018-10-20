import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

// import { FloatingActionButton } from 'materialize-css';

@Component({
  selector: 'ngi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  imageUrl: string;

  constructor() {
    this.imageUrl = './../assets/images/rozhon.jpeg';
  }

  // @ViewChild('fixedActionBtn')
  // fixedActionBtn: ElementRef;

  ngAfterViewInit(): void {
    // // initialize materialize components
    // FloatingActionButton.init(this.fixedActionBtn.nativeElement);
  }
}
