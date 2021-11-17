export class Room {
    constructor(
        public id: number,
        public active: boolean,
        public name: string,
        public startDate: Date,
        public endDate: Date,
        public info: string,
        public sprekerId: number
    ){}
}
