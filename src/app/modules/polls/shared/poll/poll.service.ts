import { Answer } from './../answer/answer.model';
import { Poll } from './poll.model';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private pollCollection: AngularFirestoreCollection<Poll>;

  constructor(private afs: AngularFirestore) {
    this.pollCollection = this.afs.collection<Poll>('poll', poll => {
      return poll.orderBy('createdAt', 'desc');
    });
   }

private static handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);

      if (error.status >= 500) {
        throw error;
      }

      return of(result);
    };
  }

  getPolls(): Observable<Poll[]> {
    return this.pollCollection.snapshotChanges()
      .pipe(
        map(polls => {
          return polls.map(poll => {
            const data = poll.payload.doc.data();
            return new Poll({ _id: poll.payload.doc.id, ...data })
          });
        }),
        tap(() => console.log(`fetched polls`)),
        catchError(PollService.handleError('getPolls', []))
      );
  }

  // getPoll(): Observable<Poll & Answer[]> {
  //   return
  // }
}
