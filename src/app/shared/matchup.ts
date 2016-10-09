
/** 單場配對結果 */
export class MatchUp
{
    joiners: Array<string>;
    time: Date;

    constructor(joiners: Array<string>) {
        this.joiners = joiners;
        this.time = new Date();
    }
}
