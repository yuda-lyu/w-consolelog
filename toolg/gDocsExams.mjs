import _ from 'lodash-es'
import fs from 'fs'
import getFiles from 'w-package-tools/src/getFiles.mjs'
import getPks from 'w-package-tools/src/getPks.mjs'


let fd_src = './examples/'
let fd_tar = './docs/examples/'


async function main() {
    //把example裡面cdn更換, 再複製到docs的example內, 作為日後發佈為靜態網站

    //pks
    let pks = getPks()

    //cdn
    let cdn = `<script src="https://cdn.jsdelivr.net/npm/w-consolelog@${pks.version}/dist/w-consolelog.umd.js"></script>`

    //mkdirSync
    if (!fs.existsSync(fd_tar)) {
        fs.mkdirSync(fd_tar)
    }

    //getFiles
    let ltfs = await getFiles(fd_src)

    _.each(ltfs, function(v) {

        //fn
        let fn = fd_src + v

        //c
        let c = fs.readFileSync(fn, 'utf8')

        //replace
        let r = `<script src="../dist/w-consolelog.umd.js"></script>`
        c = c.replace(r, cdn)

        //write
        //console.log(c)
        fs.writeFileSync(fd_tar + v, c, 'utf8')

    })

}
main()
