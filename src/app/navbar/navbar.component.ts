import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private config: ScrollToConfigOptions;

  constructor(private _scrollToService: ScrollToService) {
  }
  
  public triggerScrollTo(divId) {
    this.config = {
      target: divId,
      duration: 650,
      offset: -140
    };
    this._scrollToService.scrollTo(this.config);
  }

  ngOnInit() {
  }

}
