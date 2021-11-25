const kntl = require("node-fetch")
const fs = Ft.fs

module.exports = {

name: ["dilan"],

type: ["quotes"],
useLimit: true,
description: "quotes kata kata dilan",
utilisation: userbot.prefix + "dilan",

async execute(m) {
 let { conn, text } = data

let cuk = await kntl('https://github.com/Rizxyu/FEATURE-BOT/raw/main/random/dilan.json')
let dot = await cuk.json()
    let json = dot[Math.floor(Math.random() * dot.length)]

J = `
${json}
`
conn.sendButtonLoc(m.chat, await ( await fetch('https://telegra.ph/file/db171335f79e5eeceefe4.jpg')).buffer(), J, userbot.packname, `Dilan`, `dilan`, m)

}
}
