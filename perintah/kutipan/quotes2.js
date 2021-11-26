const kntl = require("node-fetch")
const fs = Ft.fs

module.exports = {

name: ["quotes2"],

type: ["quotes"],
useLimit: true,
description: "kata kata quotes",
utilisation: userbot.prefix + "quote",

async execute(m) {
 let { conn, text } = data
 let pinter = await kntl('http://zekais-api.herokuapp.com/quotes?apikey=m7k6CYIs')
  let aw = await tolol.json()
   let iku = aw.result.quotes
A = `
${iku}
`
conn.sendButton(m.chat, A, userbot.packname, `/Next➡️`, `bucin`, m)

}
}
