var validStr = function (msg) {
    return msg && (msg + '').trim();
}

var emojiTxtReg = /\[(.*?)\]/g;


var getImgHtml = function (className, src, alt) {
    return ['<img class="', className, '" src="', src, '" alt="[', alt, ']">'].join('');
};

/**
 * resourceItem
 * @typedef {Object} resourceItem
 * @property {string} text
 * @property {string} class
 * @property {?string} url  - string or null
 * @property {?string} code - string or null
 * @property {?RegExp} reg  - string or null
 */


/**
 * @type {resourceItem[]}
 */
var resource = [];

/**
 * @type {Object.<string, resourceItem>}
 */
var textMap = {};

var convert = {
    /**
     * @param {{text: string, class: string, url:string, code:?string }[]} list
     */
    extend(list) {

        if (!Array.isArray(list)) return;

        list.forEach(function (item) {
            var code = item.code;
            if (code == null) return;

            if (typeof code === 'string') {
                item.reg = new RegExp(code, 'g');
            }
            else {
                item.code = null;
                throw new Error(JSON.stringify(item) + ': code muse be String')
            }

            textMap[item.text] = item;
        });

        resource = resource.concat(list);

    },

    /**
     * [xxx]-->unicode字符
     * @param {string} msg
     * @returns {string}
     */
    toUnicode(msg) {
        msg = validStr(msg);
        if (!msg) return msg;

        return msg.replace(emojiTxtReg, function (match, text) {
            var item = textMap[text];
            return item && item.code || match;
        });
    },

    /**
     * unicode字符-->[xxx]
     * @param {string} msg
     * @returns {string}
     */
    toText(msg){
        msg = validStr(msg);
        if (!msg) return msg;

        //unicode
        resource.forEach(function (item) {
            if(!item.code) return;

            msg=msg.replace(item.reg,'['+item.text+']');
        })

        return msg;
    },

    /**
     * [xx]和unicode字符 --> img标签
     * @param {string} msg
     * @param {boolean} [passU] true:不转换unicode表情
     */
    toHtml(msg, passU = false) {
        msg = validStr(msg);
        if (!msg) return;

        var item;
        msg = msg.replace(emojiTxtReg, function (match, text) {
            item = textMap[text];
            if(item) return getImgHtml(item.class,item.url,item.text);
            else return match
        });

        if(passU) return;

        //unicode
        resource.forEach(function (item) {
            if(!item.code) return;

            msg=msg.replace(item.reg, function () {
                return getImgHtml(item.class,item.url,item.text);
            })

        })

        return msg;

    }

}

export default convert;



