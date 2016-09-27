
export class DateUtil
{
    private static pad(n: number, width: number, z: string = '0') {
        let ns = n.toString();

        return ns.length >= width ? n : new Array(width - ns.length + 1).join(z) + ns;
    }

    public static formatDate(d: Date)
    {
        if (!d) return "";
    
        return d.getMonth() + "/" +
            DateUtil.pad(d.getDate(), 2) + " " +
            DateUtil.pad(d.getHours(), 2) + ":" +
            DateUtil.pad(d.getMinutes(), 2) + ":" +
            DateUtil.pad(d.getSeconds(), 2);
    }
}