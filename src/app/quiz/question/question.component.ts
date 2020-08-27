import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input('question') question;
  @Input('questionNo') questionNo: number;

  @Output('answered') answered = new EventEmitter();
  right: boolean;
  wrong: boolean;
  selectedAnswer: string;
  selectedAnswerIndex: number;
  correctAnswerIndex: number;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(change: SimpleChanges) {
    console.log(change);
  }
  async submitAnswer(answer: string, selectedIndex: number) {
    this.selectedAnswer = answer;
    this.selectedAnswerIndex = selectedIndex;
    await this.checkAnswer(answer);
  }

  nextQuestion() {
    this.answered.emit({
      nextQuestion: this.questionNo,
      score: this.right ? 20 : 0,
    });
    this.selectedAnswerIndex = this.correctAnswerIndex = undefined;
    this.right = this.wrong = false;
  }
  async checkAnswer(answer: string) {
    this.correctAnswerIndex = this.question.answer.indexOf(
      this.question.correct_answer
    );
    if (answer === this.question.correct_answer) {
      this.right = true;
    } else {
      this.wrong = true;
    }
  }
}
