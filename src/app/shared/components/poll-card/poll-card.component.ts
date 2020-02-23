import { Poll } from './../../../modules/polls/shared/poll/poll.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poll-card',
  templateUrl: './poll-card.component.html',
  styleUrls: ['./poll-card.component.scss']
})
export class PollCardComponent implements OnInit {
  @Input() poll: Poll;

  constructor() { }

  ngOnInit(): void {
  }

}
