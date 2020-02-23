interface Date {
  toDate(): Date;
}

export class Poll {
  id: string;
  ipAddress: string;
  question: string;
  options: string[];
  createdAt: Date;
  lastVote: Date;
  votes: number;

  constructor(poll: any = {}) {
    this.id = poll._id;
    this.ipAddress = poll.ipAddress;
    this.question = poll.question;
    this.options = poll.options;
    this.createdAt = poll.createdAt;
    this.lastVote = poll.lastVote;
    this.votes = poll.votes;
  }

  // When a user votes
  vote() {
    this.votes += 1;
  }

}

