interface Date {
  toDate(): Date;
}

export class Answer {
  id: string;
  poll_id: string;
  ipAddress: string;
  option: number;
  createdAt: Date;

  constructor(answer: any = {}) {
    this.id = answer._id;
    this.poll_id = answer.poll_id;
    this.ipAddress = answer.ipAddress;
    this.option = answer.option;
    this.createdAt = answer.createdAt;
  }

}

