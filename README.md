emoji表情的转换。

1. 将unicode字符转换为\[xxx]的文本格式

2. 将emoji表情和\[xxx]格式的文本转换为图片

3. 将\[xxx]格式的文本转换为unicode字符。


# 下载
* npm: `npm install --save emoji-convert`
* 直接下载: \<script src="http://wangwl.net/static/demo/emoji-convert/index.js"></script\>


# 使用
* es2015: `import utils from "emoji-convert"`
* commonjs: `var utils = require("emoji-convert")`
* amd: `define( ["/js/emoji-convert.js"] , (utils)=>{ /*...*/ } )`
* window.utils: `<script src="http://wangwl.net/static/demo/emoji-convert/index.js"></script>`
* self.utils: `importScripts("./emoji-convert.js")`

# demo
[http://wangwl.net/static/demo/emoji-convert/index.html](http://wangwl.net/static/demo/emoji-convert/index.html)

# 示例
```javascript
//npm install emoji-convert
//npm install emoji-convert-resource-base

import source from 'emoji-convert-resource-base';
import convert from 'emoji-convert';

convert.extend(source);

convert.toUnicode('[大笑]');        //"\u{1f604}"
convert.toText('\u{1f604}');       //"[大笑]"
convert.toHtml('[大笑]');          //<img class="emoji-daxiao" src="https://static.ws.126.net/f2e/modules/emoji/lib/emoji/704.png" alt="[大笑]">
convert.toHtml('\u{1f604}');       //<img class="emoji-daxiao" src="https://static.ws.126.net/f2e/modules/emoji/lib/emoji/704.png" alt="[大笑]">

```

# API

## toUnicode(msg)
`function (msg:string) : string`

解析msg字符串，将\[xxx]格式的字符转换为emoji字符。


## toText(msg)
`function (msg:string) : string`

解析msg，将其中的emoji字符转换为\[xxx]格式的字符。

## toHtml(msg)
`function (msg:string) : string`

将emoji字符和\[xxx]格式的字符转换为img标签。

## extend(list)
`function ( list:array<item>) : void`
`item: {text: string, class: string, url:string, code:?string}`

添加表情资源。例如

```javascript
convert.extend([{
    text:'大笑1',
    class:'daxiao1',
    url:'http://163.com',
    code:'\u{1f604}'
}]);
convert.toUnicode('[大笑1]');     //"\u{1f604}"
convert.toText('\u{1f604}');      //[大笑1]
convert.toHtml('[大笑1]');         //<img class="daxiao1" src="http://163.com" alt="[大笑1]">
convert.toHtml('\u{1f604}');      //<img class="daxiao1" src="http://163.com" alt="[大笑1]">

```