import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  polls: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.polls = firestore.collection('poll').valueChanges();
  }
}
