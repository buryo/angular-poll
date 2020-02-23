import { Poll } from './../../modules/polls/shared/poll/poll.model';
import { PollService } from './../../modules/polls/shared/poll/poll.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map, defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  polls: Observable<Poll[]>;

  constructor(private PollService: PollService) {

  }

  ngOnInit(): void {
    this.polls = this.PollService.getPolls().pipe(
      map(polls => polls.slice(0, 10)),
      defaultIfEmpty([])
    );
  }

}
