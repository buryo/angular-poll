import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Answer } from './answer.model';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private answerCollection: AngularFirestoreCollection<Answer>;

  constructor(private afs: AngularFirestore) {
    this.answerCollection = this.afs.collection<Answer>('answer');
  }

  // return new Answer({id, ...answer.data});

  getPollAnswers(id: string): Observable<any> {
    const pollAnswerColllection = this.afs.collection<Answer>('answer', ref => ref.where('pollId', '==', id));
    return pollAnswerColllection.snapshotChanges()
      .pipe(
        map(answer => {
          return answer.map(answer => {
            const data = answer.payload.doc.data();
            return new Answer({ _id: answer.payload.doc.id, ...data })
          });
        }),
        tap(() => console.log(`fetched all answers of ${id}`))
      )
  }
}
