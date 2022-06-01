/*
 * @Descripttion: 
 * @version: 
 * @Author: zengdeping
 * @Date: 2022-05-26 15:49:59
 * @LastEditors: zengdeping
 * @LastEditTime: 2022-06-01 19:11:29
 */
const helper = {
    /**
     * @name: 
    * @Descripttion: 长度不少于n位，需包含大小写字母、数字或特殊字符
     * @param {*} pwd
     * @return {*}
     */
    passWord(pwd,n=8) {
        let reg
        eval('reg = /^$|^(?![A-Za-z]+$)(?![A-Z0-9_\\W]+$)(?![a-z0-9_\\W]+$)[\\w\\W]{' + n + ',}$/g')
        return reg.test(pwd);
    },
    
    // 自动补全，1 => 00001
    /**
     * @name: 
     * @Descripttion: 自动补全
     * @param {*} a 需要不全的数：1
     * @param {*} b 补成几位
     * @return {*} 000001
     */
    PrefixInteger(a, b) {
        const num = parseInt(a);
        let n = 6;
        if (b) n = b;
        return (Array(n).join(0) + num).slice(-n);
    },
    /**
     * @name: 
     * @Descripttion: get传参 将object转为字符串
     * @param {*} query:object
     * @return {*} string
     */
    queryToString(query = {}) {
        const encode = encodeURIComponent;
        return Object.keys(query).map(
            key => (`${encode(key)}=${encode(query[key])}`),
        ).join('&');
    },
    stringToQuery(string=''){
        const query = {};
        if (string) {
            string.split('&').map(
                item => item.split('='),
            ).forEach(
                item => (query[item[0]] = item[1]),
            );
        }
        return query;
    },
    // 判断一个字段是否不为空
    notEmptyAll(code) {
        const type = Object.prototype.toString.call(code)
        // 对字符串的判断
        if (code === '' || code === undefined || code === null || code === 'undefined' || code === 'null') {
            return false;
        }
        // 对对象的判断
        if (type === '[object Object]') {
            let flag = false;
            for (const key in code) {
                flag = true;
                break;
            }
            return flag;
        }
        // 对数组的判断
        if (type === '[object Array]') {
            if (code.length === 0) {
                return false
            } else {
                return true
            }
        }
        return ture;
    },
    // 保留两位数并且四舍五入
    keepTwoDecimalFull(num, p = 2) {
        let result = parseFloat(num);
        if (isNaN(result)) {
            return false;
        }
        const multiplicator = Math.pow(10, p);
        result = Math.round(num * multiplicator) / multiplicator;
        let s_x = result.toString();
        let pos_decimal = s_x.indexOf('.');
        if (pos_decimal < 0) {
            pos_decimal = s_x.length;
            s_x += '.';
        }
        while (s_x.length <= pos_decimal + p) {
            s_x += '0';
        }
        return s_x;
    },
    // 只是保留两位小数，不四舍五入
    keepTwoDecimal(text = '') {
        const Index = text.toString().indexOf('.');
        return text && Index > -1 ? text.toString().substring(0, Index + 3) : text;
    },
    // 数字格式化，每三位加逗号
    toThousands(num) {
        const numStr = num === 0 ? '0' : `${num || ''}`;
        return numStr.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
    },
    accAdd(arg1, arg2) {
        var r1, r2, m, c;
        try {
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2));
        if (c > 0) {
            var cm = Math.pow(10, c);
            if (r1 > r2) {
                arg1 = Number(arg1.toString().replace(".", ""));
                arg2 = Number(arg2.toString().replace(".", "")) * cm;
            } else {
                arg1 = Number(arg1.toString().replace(".", "")) * cm;
                arg2 = Number(arg2.toString().replace(".", ""));
            }
        } else {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", ""));
        }
        return (arg1 + arg2) / m;
    },
    // 减法
    accDiv(arg1, arg2) {
        var t1 = 0, t2 = 0, r1, r2;
        try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
        try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
        r1 = Number(arg1.toString().replace(".", ""))
        r2 = Number(arg2.toString().replace(".", ""))
        return (r1 / r2) * Math.pow(10, t2 - t1);
    },
    //乘法函数
    accMul(arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length;
        }
        catch (e) {
        }
        try {
            m += s2.split(".")[1].length;
        }
        catch (e) {
        }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    },
    // 除法
    accSubtr(arg1, arg2) {
        var r1, r2, m, n;
        try {
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        //last modify by deeka
        //动态控制精度长度
        n = (r1 >= r2) ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    },
    // 判断字段是什么类型的
    
}
export default helper