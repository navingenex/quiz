import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input('question') question;
  @Output('answered') answered = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
