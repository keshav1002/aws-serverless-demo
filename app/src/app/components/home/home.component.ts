import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  firstNumber: number = 0;
  secondNumber: number = 0;
  answer: number = 0;
  showLoader: boolean = false;

  constructor(private homeService: HomeService) {}

  addTwoNumbers = async (firstNumber: number, secondNumber: number) => {
    try {
      this.showLoader = true;
      const response: any = await this.homeService.addTwoNumbers(
        firstNumber,
        secondNumber
      );
      if (response && response.answer) this.answer = response.answer;
    } catch (e: any) {
      console.error(e);
      alert(e.error.message);
    } finally {
      this.showLoader = false;
    }
  };

  clearNumbers() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.answer = 0;
  }

  ngOnInit(): void {}
}
