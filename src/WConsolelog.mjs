import jv from 'w-jsonview-tree/src/WJsonviewTree.mjs'
import map from 'lodash/map'
import each from 'lodash/each'
import join from 'lodash/join'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import isBoolean from 'lodash/isBoolean'
import isFunction from 'lodash/isFunction'


let n = 0 //自產id編號

function logItem(id, data) {

    //ele
    let ele = document.querySelector(`#${id}`)

    //cs
    let cs = ''
    if (isNumber(data)) {
        cs = 'wjv-json-number'
    }
    else if (isString(data)) {
        cs = 'wjv-json-string'
    }
    else if (isBoolean(data)) {
        cs = 'wjv-json-boolean'
    }
    else if (isFunction(data)) {
        cs = 'wjv-json-function'
    }

    //generate
    if (cs !== '') {
        ele.className = cs
        ele.style.margin = `4px 0px`
        ele.innerHTML = data
    }
    else {
        jv(data, ele, { expanded: true })
    }

}

function logItems(...args) {

    //解析args與產生items數據
    let divs = map(args, (arg) => {
        n += 1
        let id = `id-${n}`
        let div = `<div id="${id}" style="display:inline-block; vertical-align:top;"></div>`
        return {
            id,
            div,
            data: arg,
        }
    })

    //產生items的div
    let divItems = join(map(divs, 'div'), `<div style="display:inline-block; vertical-align:top; padding-right:10px; margin:4px 0px;">,</div>`)

    //產生consolelog單行的div
    let divLine = `<div class="CompCssDJsonViewTree" style="padding:5px 0px; border-bottom:1px solid #ddd;">${divItems}</div>`

    //插入至body
    document.querySelector('body').insertAdjacentHTML('beforeend', divLine)

    //初始化各item的div數據
    each(divs, (v) => {
        logItem(v.id, v.data)
    })

}


/**
 * 前端通過body元素展示console.log的數據，可包含Json樹狀物件資料
 *
 * @export
 * @param {*} args 輸入任意數據, 可輸入多組數據
 */
function consolelog(...args) {

    //setTimeout, 產生時可能放於head的script, 會沒有body, 故需要delay才產生
    setTimeout(() => {
        logItems(...args)
    }, 1)

}


export default consolelog
