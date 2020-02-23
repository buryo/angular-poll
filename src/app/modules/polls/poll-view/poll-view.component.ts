import { Answer } from './../shared/answer/answer.model';
import { defaultIfEmpty } from 'rxjs/operators';
import { AnswerService } from './../shared/answer/answer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poll-view',
  templateUrl: './poll-view.component.html',
  styleUrls: ['./poll-view.component.scss']
})
export class PollViewComponent implements OnInit {
  answers: Observable<Answer[]>;

  constructor(
    private route: ActivatedRoute,
    private AnswerService: AnswerService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.answers = this.AnswerService.getPollAnswers(id).pipe(
      defaultIfEmpty([])
    )

    this.answers.subscribe(what => console.log(what));
  }


}
