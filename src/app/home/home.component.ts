import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _scrollToService: ScrollToService, private router: Router) { }

  // public triggerScrollTo(divId) {
  //   const config: ScrollToConfigOptions = {
  //     target: divId,
  //     duration: 650,
  //     offset: -140
  //   };
  //   this._scrollToService.scrollTo(config);
  // }

  ngOnInit() {
    // TODO: Need to scroll to correct div in case we come from a different page
  }

}
