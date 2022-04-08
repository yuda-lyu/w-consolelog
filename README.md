# w-consolelog
A console.log for browser.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![npm version](http://img.shields.io/npm/v/w-consolelog.svg?style=flat)](https://npmjs.org/package/w-consolelog) 
[![gzip file size](http://img.badgesize.io/yuda-lyu/w-consolelog/master/dist/w-consolelog.umd.js.svg?compression=gzip)](https://github.com/yuda-lyu/w-consolelog)
[![npm download](https://img.shields.io/npm/dt/w-consolelog.svg)](https://npmjs.org/package/w-consolelog) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-consolelog.svg)](https://www.jsdelivr.com/package/npm/w-consolelog)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-consolelog/global.html).

## Example
To view some examples for more understanding, visit examples:
> **small data:** [ex-small.html](https://yuda-lyu.github.io/w-consolelog/examples/ex-small.html) [[source code](https://github.com/yuda-lyu/w-consolelog/blob/master/docs/examples/ex-small.html)]

> **large data:** [ex-large.html](https://yuda-lyu.github.io/w-consolelog/examples/ex-large.html) [[source code](https://github.com/yuda-lyu/w-consolelog/blob/master/docs/examples/ex-large.html)]

## Installation
### Using npm(ES6 module):
> **Note:** w-consolelog is not dependent on any package.
```alias
npm i w-consolelog
```
By import:
```alias
import log from 'w-consolelog'

let data={a1:123,a2:123.456,s1:'123',s2:'xyz',b1:true,f1:function(){},c1:[1.2,3.4,'5.6',false,function(){}],d1:{cid:'WK2WHS',name:'peter',unique:false,fun:function(){}}}

log(123,'abc123',true,false,function(){})
log(123,'abc123',data,true,false,function(){})
```

### In a browser(UMD module):
Add script for w-consolelog.
```alias
<script src="https://cdn.jsdelivr.net/npm/w-consolelog@1.0.10/dist/w-consolelog.umd.js"></script>
```
Directly use:
```alias
let log=window['w-consolelog']

let data={a1:123,a2:123.456,s1:'123',s2:'xyz',b1:true,f1:function(){},c1:[1.2,3.4,'5.6',false,function(){}],d1:{cid:'WK2WHS',name:'peter',unique:false,fun:function(){}}}

log(123,'abc123',true,false,function(){})
log(123,'abc123',data,true,false,function(){})
```
