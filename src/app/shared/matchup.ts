
/** 單場配對結果 */
export class MatchUp
{
    /** 參加者清單 */
    joiners: Array<string>;
    /** 產生此結果的時間 */
    time: Date;
    /** 是否為第一個場次 TODO refactor this */
    first: boolean;
    /** 準備刪除 */
    readyToDelete: boolean = false;
    /** 發球者 1~4 (0 不顯示) */
    starter: number;

    constructor(joiners: Array<string>, starter: number, first: boolean) {
        this.joiners = joiners;
        this.starter = starter;
        this.first = first;
        this.time = new Date();
    }
}
