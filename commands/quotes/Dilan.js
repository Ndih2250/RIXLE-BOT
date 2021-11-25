const kntl = require("node-fetch")
const fs = Ft.fs

module.exports = {

name: ["dilan"],

type: ["quotes"],
useLimit: true,
description: "quotes kata kata dilan",
utilisation: userbot.prefix + "dilan",

async execute(m) {
 let { conn } = data

let cuk = await kntl('https://github.com/Rizxyu/FEATURE-BOT/raw/main/random/dilan.json')
let dot = await cuk.json()
    let json = dot[Math.floor(Math.random() * dot.length)]

J = `
${json}
`
conn.sendButton(m.chat, J, userbot.packname, `Next➡️`, `dilan`, m)

}
}
