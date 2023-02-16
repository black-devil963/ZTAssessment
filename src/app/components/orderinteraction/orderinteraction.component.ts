import { Component } from '@angular/core';

@Component({
  selector: 'app-orderinteraction',
  templateUrl: './orderinteraction.component.html',
  styleUrls: ['./orderinteraction.component.css'],
})
export class OrderinteractionComponent {
  savebtn: boolean = true;
  savebtn1: boolean = false;
  Condition1: boolean = true;
  autosave: boolean = true;
  bottomSymbol: boolean = true;
  delete1: boolean = true;
  delete2: boolean = true;
  delete3: boolean = true;
  choicebox: boolean = true;
  delete4: boolean = false;
  Condition2: boolean = false;
  Condition3: boolean = false;
  choice1: boolean = true;
  choice2: boolean = true;
  choice3: boolean = true;
  choice4: boolean = false;
  styleOne: boolean = false;
  styleTwo: boolean = false;
  styleThree: boolean = false;
  styleFour: boolean = false;
  styleFive: boolean = false;

  screen2() {
    this.Condition1 = false;
    this.autosave = false;
    this.delete1 = false;
    this.delete2 = false;
    this.delete3 = false;
    this.bottomSymbol = false;
    this.Condition2 = true;
    this.savebtn = false;
    this.savebtn1 = true;
  }

  screen3() {
    this.Condition2 = false;
    this.Condition3 = true;
    this.savebtn = false;
    this.savebtn1 = true;
  }

  invisiblebox() {
    this.Condition2 = false;
  }

  deleteicon1() {
    this.delete1 = false;
    this.choice1 = false;
  }

  deleteicon2() {
    this.delete2 = false;
    this.choice2 = false;
  }

  deleteicon3() {
    this.delete3 = false;
    this.choice3 = false;
  }

  deleteicon4() {
    this.delete4 = false;
    this.choice4 = false;
  }

  dismiss() {
    this.bottomSymbol = false;
  }

  dismissbox() {
    this.Condition1 = false;
    this.autosave = false;
  }

  addChoice() {
    this.delete4 = true;
    this.choicebox = false;
    this.choice4 = true;
  }

  boldText() {
    this.styleOne = true;
  }

  italicText() {
    this.styleTwo = true;
    this.styleOne = false;
  }

  underlineText() {
    this.styleThree = true;
    this.styleTwo = false;
    this.styleOne = false;
  }

  Dash1() {
    this.styleFour = true;
    this.styleThree = false;
    this.styleTwo = false;
    this.styleOne = false;
  }

  Dash2() {
    this.styleFive = true;
    this.styleFour = false;
    this.styleThree = false;
    this.styleTwo = false;
    this.styleOne = false;
  }
}
