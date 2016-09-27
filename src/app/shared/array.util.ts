
export class ArrayUtil
{
    static remove<T>(arr: Array<T>, elm: T)
    {
        var index = arr.indexOf(elm);
        if (index > -1) arr.splice(index, 1);
    };
    static contains<T>(arr: Array<T>, elm: T)
    {
        return arr.indexOf(elm) !== -1;
    };
}
