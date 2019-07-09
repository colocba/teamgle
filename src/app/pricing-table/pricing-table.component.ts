import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.css']
})
export class PricingTableComponent implements OnInit {

  constructor() { }

  recordTitles = ["Payment period", "Commitment period", "Users"];
  tableContent = [
    {
      price: 870,
      paymentPeriod: "Monthly",
      commitmentPeriod: "1 Year",
      users: 50
    },
    {
      price: 1300,
      paymentPeriod: "Monthly",
      commitmentPeriod: "1 Year",
      users: 50
    },
    {
      price: 1800,
      paymentPeriod: "Monthly",
      commitmentPeriod: "1 Year",
      users: 50
    }
  ];

  ngOnInit() {
  }

}
