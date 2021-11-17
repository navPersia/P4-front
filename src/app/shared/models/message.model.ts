export class Message {
    constructor(
        public id: number, 
        public userId: number, 
        public messaging: string, 
        public postedAt: Date,
        public roomId: number,
        public role: number,
        public username: number
    ){}
  }
