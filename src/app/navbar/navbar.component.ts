import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private config: ScrollToConfigOptions;

  /* Each time any a is pressed need to set dynamically offset deppending
      on screen size */
  private desktopOffset = -140;
  private phonePortraitOffset = -400;
  private phoneLandscapeOffset = -150;

  constructor(private _scrollToService: ScrollToService) {
  }
  
  public triggerScrollTo(divId) {
    const currentOffset = this.setOffsetByScreenSize();
    this.config = {
      target: divId,
      duration: 650,
      offset: currentOffset
    };
    this._scrollToService.scrollTo(this.config);
  }

  public setOffsetByScreenSize() {
    if (screen.width <= 450) {
      return this.phonePortraitOffset;
    }
    if (screen.width <= 850) {
      return this.phoneLandscapeOffset;
    }
    return this.desktopOffset;
  }

  ngOnInit() {
  }

}
