import { Router } from '@angular/router';
import { SharedService } from './../shared/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  txtButton: string = 'Start Quiz';
  questions: any = [];
  questionIndex: number = 0;
  questionLength: number;
  scoreCard: number;
  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {}
  startTest() {
    this.sharedService.startQuiz().subscribe((q) => {
      this.questions = q;
      this.questionLength = this.questions.length;
      this.txtButton = 'Submit';
    });
  }

  retry() {
    this.scoreCard = undefined;
    this.sharedService.resetScore();
    this.questionIndex = 0;
    this.startTest();
  }

  async nextQuestion(event: any) {
    console.log(event);
    if (this.questionIndex >= this.questionLength - 1) {
      this.scoreCard = await this.sharedService.calculateScore(event.score);
    } else {
      this.sharedService.storeScore(event.score);
      this.questionIndex++;
    }
  }
}
