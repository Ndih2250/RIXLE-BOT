const fs = Ft.fs
let fetch = require('node-fetch')

  module.exports = {
   name: ["igreel","igreels"],
   type: ["download"],
   useLimit: true,
   description: "download reel instagram",
   utilisation: userbot.prefix + "igreel <link>",

  async execute(m) {
    let { conn, text } = data
    if (!text) return m.reply("masukkan link")
    if (!text.includes("instagram.com")) return m.reply("link tidak valid")
    let res = await fetch('https://api.dapuhy.ga/api/socialmedia/igdownload?url=${text}&apikey=ekz123')
    let json = await res.json()
    if (!json.status) throw json
    
    let { username, full_name, profile_picurl, followers } = json.user
    let pesan = `*IG REELS DOWNLOADER*
Username : ${username}
Full Name : ${full_name}
Followers : ${followers}
  `.trim()
    conn.sendFile(m.chat, profile_picurl, null, pesan, m, {thumbnail: await (await fetch(img_url)).buffer() })
    conn.sendFile(m.chat, json.result.url, null, null, m)
    console.log("Send IG REELS DOWNLOAD")
  }
  }
