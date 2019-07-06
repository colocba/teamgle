import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {

  constructor() {
  }

  cards1 = [
    {url: "../../assets/cloud-syn-logo/cloud-syn-logo.png" ,
     title: "All in the cloud. Real time sync for both managers and workers"},
    {url: "../../assets/anounce-shifts-logo/anounce-shift-logo.png" ,
     title: "Anounce all your events and open shifts on the system"},
    {url: "../../assets/choose-shifts-logo/choose-shifts-logo.png" ,
     title: "Team workers will be able to dinamically choose shifts"},
    {url: "../../assets/update-changes-logo/update-changes-logo.png" ,
     title: "Last minute updates via SMS, email and push notifications"}
  ]

  cards2 = [
    {url: "../../assets/monitor-scheddule-logo/monitor-scheddule-logo.png" ,
     title: "Monitor all shifts scheddule witin your team"},
    {url: "../../assets/logistics-mgmnt-logo/logistics-mgmnt-logo.png" ,
     title: "Manage all the logistics for your event"},
    {url: "../../assets/data-payment-system-logo/data-payment-system-logo.png" ,
     title: "Update and add payment data on the payment system"},
    {url: "../../assets/worker-history-logo/worker-history-logo.png" ,
     title: "Save all the working history of each worker"}
  ]

  ngOnInit() {
  }

}
