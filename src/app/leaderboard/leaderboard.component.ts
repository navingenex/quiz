import { SharedService } from './../shared/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  leaderBoard: any[];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.leaderBoard = this.sharedService.getLeaderBoardScore();
    this.sharedService.resetScore();
  }
}
