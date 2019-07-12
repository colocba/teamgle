import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qanda-accordion',
  templateUrl: './qanda-accordion.component.html',
  styleUrls: ['./qanda-accordion.component.css']
})
export class QandaAccordionComponent implements OnInit {

  qAndA = [{
    question: "Do I need to install any software?",
    answer: "Absolutely not! Teamgle is web based software where you just need to enter your assignated username and password deppending on your permissions access. Managers, Workers, Clients",
    hrefId: "collapseOne"
  }, {
    question: "How much it costs?",
    answer: "The price will be set according to the amount of users on your team. For more information click here.",
    hrefId: "collapseTwo"
  }, {
    question: "How do I pay?",
    answer: "Monthly pay with credit card.",
    hrefId: "collapseThree"
  }, {
    question: "Is there any support?",
    answer: "Of course! Teamgle team is available for your on whatsapp, email and phone. We'll be more than happy to help you.",
    hrefId: "collapseFour"
  }, {
    question: "How do I start using Teamgle?",
    answer: "When getting your system permission you will be able to start creating your organization background by setting work positions, workers and clients data, users permissions. Now go ahead and set for each of your employees user name and password and they will be able to receive relevant information on real time of all events and conferences running on the system. Also from the cellphone. ",
    hrefId: "collapseFive"
  }]

  constructor() { }

  ngOnInit() {
  }

}
