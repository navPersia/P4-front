export class Voteuser {
    constructor(
        public id: number,
        public userId: number,
        public pollId: number,
        public answer: String,
    ){
    }
}
