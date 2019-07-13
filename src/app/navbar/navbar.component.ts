import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { timer } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  /* Each time any a is pressed need to set dynamically the offset deppending
      on screen size */
  private desktopOffset = -140;
  private phonePortraitOffset = -400;
  private phoneLandscapeOffset = -150;

  constructor(private _scrollToService: ScrollToService, private router: Router) {

  }
  
  public triggerScrollTo(divId) {
    // if (!this.router.url.includes('home')) {
    //   this.router.navigate(['/home']);
    //   return;
    // }
    const currentOffset = this.setOffsetByScreenSize();
    const config: ScrollToConfigOptions = {
      target: divId,
      duration: 650,
      offset: currentOffset
    };
    this._scrollToService.scrollTo(config);
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
