import { SharedService } from './../shared/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  txtButton: string = 'Start';
  questions: Object;
  nextIndex: any;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}
  startTest() {
    this.sharedService.startQuiz().subscribe((q) => {
      this.questions = q;
      this.txtButton = 'Submit';
    });
  }

  nextQuestion(event) {
    this.nextIndex = event;
  }
}
