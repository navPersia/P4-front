export class Poll {
  constructor(
      public id: number, 
      public type: string, 
      public active: boolean, 
      public question: string,
      public options: string,
      public roomId: number
  ){}
}

