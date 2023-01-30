const fs = require('fs')
const chalk = require('chalk')
const {
   indonesia,
   english,
   spanyol
} = require(`./language`)

// Website Api (jgn di ganti tomlol)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

// Free apikey (Apikey expired silahkan login terus ganti V12 dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'V12', // 👉 login https://api.zeeoneofc.xyz to get apikey
}

// setting 
global.autoread = true // auto read message
global.autobio = false //auto ganti bio
global.anticall = true //anti call 
global.userRegister = false
global.autoblok212 = false //ubah jadi true biar nmr 212 di blok sama bot

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = english //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "ArcX" //namabot kalian
global.ownername = "A.R.Abdullah" //nama kalian
global.myweb = "https://github.com/abdullahwy/Arcx" //bebas asal jan hapus
global.youtube = "https://youtube.com/@TreviewTechBro" //bebas asal jan hapus
global.myweb2 = "https://github.com/abdullahwy/Arcx" //bebas
global.email = "arabdullahwinpc@gmail.com" //bebas
global.region = "Islamic" //bebas
global.timezone = 'Asia/Colombo' //  timezone wib
global.premium = ['94771966060'] //premium user
global.owner = ["94772582662", "94774281955"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "94771966060" // nomor wa kalian
global.ownernomerr = "+94771966060" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome = "https://telegra.ph/file/93eba6a0b4cabcde79fb2.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.thumbGif = ''
global.packname = '© ArcX-Md' //sticker wm ubah
global.author = 'ArcX Stickers' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'
global.multiplier = 69
global.limitawal = {
   premium: "10000",
   free: 100
}

global.adventureRPG = 'https://telegra.ph/file/93eba6a0b4cabcde79fb2.jpg'
global.bankRPG = 'https://telegra.ph/file/93eba6a0b4cabcde79fb2.jpg'
global.bansosRPG = 'https://telegra.ph/file/93eba6a0b4cabcde79fb2.jpg'
global.bansosRPG_ = 'https://telegra.ph/file/93eba6a0b4cabcde79fb2.jpg'
global.berburuRPG = 'https://telegra.ph/file/93eba6a0b4cabcde79fb2.jpg'
global.inventoryRPG = 'https://telegra.ph/file/93eba6a0b4cabcde79fb2.jpg'
global.cooldownRPG = 'https://telegra.ph/file/93eba6a0b4cabcde79fb2.jpg'
global.dailyRPG = 'https://telegra.ph/file/93eba6a0b4cabcde79fb2.jpg'
global.hourlyRPG = 'https://telegra.ph/file/93eba6a0b4cabcde79fb2.jpg'
global.kandangRPG = 'https://telegra.ph/file/93eba6a0b4cabcde79fb2.jpg'
global.kolamRGP = 'https://telegra.ph/file/93eba6a0b4cabcde79fb2.jpg'
global.mancingRPG = 'https://telegra.ph/file/93eba6a0b4cabcde79fb2.jpg'
global.monthlyRPG = 'https://telegra.ph/file/93eba6a0b4cabcde79fb2.jpg'
global.weeklyRPG = 'https://telegra.ph/file/93eba6a0b4cabcde79fb2.jpg'
global.rpg = {
   emoticon(string) {
      string = string.toLowerCase()
      let emot = {
         level: '📊',
         limit: '🎫',
         health: '❤️',
         exp: '✨',
         money: '💹',
         bank: '🏦',
         potion: '🥤',
         diamond: '💎',
         common: '📦',
         uncommon: '🛍️',
         mythic: '🎁',
         legendary: '🗃️',
         superior: '💼',
         pet: '🔖',
         trash: '🗑',
         armor: '🥼',
         sword: '⚔️',
         pickaxe: '⛏️',
         fishingrod: '🎣',
         wood: '🪵',
         rock: '🪨',
         string: '🕸️',
         horse: '🐴',
         cat: '🐱',
         dog: '🐶',
         fox: '🦊',
         petFood: '🍖',
         iron: '⛓️',
         gold: '🪙',
         emerald: '❇️',
         upgrader: '🧰'

      }
      let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
      if (!results.length) return ''
      else return emot[results[0][0]]
   }
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['', '!', '.', '🐦', '🐤', '🗿']
global.sp = '⭔'
global.mess = {
   sukses: '🤗Success ~',
   admin: 'You must be admin for that !',
   botAdmin: 'Please Give Me Admin !',
   owner: 'Only Owner Can Use It !',
   group: 'You Can Use This Only In Groups !',
   private: 'You Can Use This Only In Private Chat !',
   bot: 'Fitur Khusus Pengguna Nomor Bot',
   errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
   wait: '⏳ *Loding*',
   lockCmd: 'Only Owner Can Use It !',
   example1: 'Welcome @user For Our Group @subject Group Rules  @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)
})
