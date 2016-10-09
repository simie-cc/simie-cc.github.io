
/** 人員結構 */
export class PersonRecord
{
    /** 姓名 */
    name: string;
    /** 是否有參加 */
    join: boolean;
    /** 參加次數 */
    count: number;

    constructor(name: string)
    {
        this.name = name;
        this.join = true;
        this.count = 0;
    }
}
