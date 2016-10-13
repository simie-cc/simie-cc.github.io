
/** 單場配對結果 */
export class MatchUp
{
    joiners: Array<string>;
    time: Date;
    first: boolean;

    constructor(joiners: Array<string>, first: boolean) {
        this.joiners = joiners;
        this.first = first;
        this.time = new Date();
    }
}
