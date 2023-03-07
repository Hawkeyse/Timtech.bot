const fs = require('fs')
const chalk = require('chalk')


global.botname = "VIRTUAL KOMBAT" 
global.botLanguage = "default" // 𝗗𝗲𝗳𝗮𝘂𝗹𝘁 || 𝗘𝗻𝗴𝗹𝗶𝘀𝗵 || 𝗛𝗶𝗻𝗱𝗶 || 𝗔𝗿𝗮𝗯𝗶𝗰 \\
global.author = "TIMTECH"  
global.packname = "VIRTUAL KOMBATBAT✯𝘽𝙊𝙏"  
global.myweb = "https://github.com/Hawkeyse/Timtech.bot/" // You can put any link 
global.waterMark = "×͜×  ✘timtech™ ✓" // Your own watermark 
global.headerText = "Anya by Timtech" // text for header of menu         
global.DocumentTitle = "MASTER⚔️TIMTECH" 


global.ownername = "TImtech"   // Owner name //        
global.ownernumber = ['233508968298'] 
global.socialm = "𝗜𝗻𝘀𝘁𝗮 :  // 𝗜𝗻𝘀𝘁𝗮 : || 𝗚𝗶𝘁𝗵𝘂𝗯 : || 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : \\
global.ytname = "YT: Ytname"   // Yt chanel name //
global.continent = "Ghana" // your continent name 
global.region = "Accra" // your country name
global.state = "Abokobi" // your state name
global.district = "Accra" // your district name
global.timezone = "GMT" // search on google if you don't know the timezone of your country //
global.instagramId = "" // Your insta ID
global.email = "example@exmaple.com" // put your email here


//------------ 🌟 Premium Users 🌟-------------\\
global.premium = ['233508968298']  // available soon
global.sudo = ['233508968298']  // Co - Owners //

global.prefa = ['-','!','🔥']

//--------Random bot name for Info section--------\\
name16 = "𓄂⍣⃝ TIMTECH 𓆩×͜×𓆪ꪾ️"
name17 = "𓄂⍣⃝ TIMTECH 𓆩×͜×𓆪ꪾ️"
name18 = "𓄂⍣⃝ TIMTECH 𓆩×͜×𓆪ꪾ️"

//--------Random footer message-----------\\
footer1 = `𓄂𓄂⍣⃝ TIMTECH 𓆩×͜×𓆪ꪾ️ `
footer2 = `𓄂⍣⃝ TIMTECH 𓆩×͜×𓆪ꪾ️`

//--------Left message "Nikal msg"--------\\
nikalmsg1 = 'Ye galiye ye choubara, yaha dikhna na dubara 😚🖕🏻' 
nikalmsg2 = 'Patt se headshot 🔫...Abey dil se bura lagta hai bhai 😂.'

//--------Random Tagall msg--------\\
tag1 = '𝘏𝘦𝘺 𝘦𝘷𝘦𝘳𝘺𝘣𝘰𝘥𝘺😚, 𝘊𝘰𝘮𝘦 𝘰𝘯𝘭𝘪𝘯𝘦 𝘢𝘯𝘥 𝘶𝘴𝘦 𝘵𝘩𝘪𝘴 𝘢𝘸𝘦𝘴𝘰𝘮𝘦 𝘉𝘰𝘵.' 
tag2 = '𝘖𝘺𝘦 𝘦𝘷𝘦𝘳𝘺𝘰𝘯𝘦!! 𝘞𝘩𝘦𝘳𝘦 𝘢𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?😐' 
tag3 = '𝘈𝘣𝘦𝘺 𝘰𝘯𝘭𝘪𝘯𝘦 𝘢𝘢𝘰 𝘺𝘢𝘢𝘳!😑' 
tag4 = '𝘞𝘰𝘸 𝘭𝘰𝘰𝘬 𝘢𝘵 𝘵𝘩𝘪𝘴 𝘢𝘥𝘷𝘢𝘯𝘤𝘦 𝘉𝘰𝘵.😚' 
tag5 = '𝘠𝘢𝘢𝘳 𝘬𝘺𝘢 𝘉𝘰𝘵 𝘩𝘢𝘪❤️' 
tag6 = 'You are so hot!🥵' 
tag7 = '𝘞𝘩𝘦𝘳𝘦 𝘢𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?' 
tag8 = '𝘏𝘦𝘺 𝘸𝘩𝘦𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?...𝘤𝘰𝘮𝘦 𝘩𝘦𝘳𝘦 𝘨𝘶𝘺𝘴 𝘶𝘴𝘦 𝘵𝘩𝘪𝘴 𝘖𝘗 𝘉𝘰𝘵!🔥' 
tag9 = '𝘠𝘰𝘶 𝘢𝘭𝘭 𝘴𝘩𝘰𝘶ld 𝘵𝘳𝘺 𝘵𝘩𝘪𝘴 𝘤𝘶𝘵𝘦 timtech❤️🍫' 
tag10 = 'Timtech 𝘪𝘴 𝘉𝘦𝘴𝘵!!😚' 


global.mess = {
    success: 'Work done 𝗗𝗮𝗿𝗹𝗶𝗻𝗴❤️',
    admin: "Baby!\nThis command is only for 𝗔𝗱𝗺𝗶𝗻𝘀...So i can't process your command babe. 😑", // I used "\n" for change the line 
    botAdmin: 'First make me 𝗔𝗱𝗺𝗶𝗻!!! 😐',
    owner: 'This command is only for my 𝗼𝘄𝗻𝗲𝗿..',
    group: "Baka !!!!!\nYou can't use this command in a 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗰𝗵𝗮𝘁 !😑",
    private: 'Such a baka !!\nThis command is only for 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗰𝗵𝗮𝘁𝘀. 🥲',
    bot: "This Feature Is Only For 𝗕𝗼𝘁... and you're not a 𝗕𝗼𝘁.",
    wait: "I'm progressing your command baby❤️, Please wait......",
    linkm: 'Abey where is the link...?',
    error: 'I got an 𝗲𝗿𝗿𝗼𝗿!!',
    sudo: "*Hey User 👋....*\nYou can't use this command because this command is only for my co-owner.", 
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the 𝗼𝘄𝗻𝗲𝗿 😡, if you want to be 𝘂𝗻𝗯𝗮𝗻𝗻𝗲𝗱, chat owner.',
    nsfw: 'The nsfw feature has not been activated, 👏',
    banChat: 'The bot was banned 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽!, please contact the owner to unban.'
}

//--------------- Menu images ----------------\\
global.Menuimage = fs.readFileSync("./AnyaPikaMedia/theme/Menu/Menuimg.jpg")
global.thumnnaiIs = fs.readFileSync("./AnyaPikaMedia/theme/Menu/Menuimg2.jpeg")

//--------------- Systemic Function --------------\\
global.autoTyping = false 
global.autoreadpmngc = false 
global.autoReadGc = false 
global.autoRecord = false 
global.available = true
global.autoTyping = false 

//----------- Users Userlimit -----------\\
global.userLimit = {
premium: "Infinity",  // premium users 
free: 12,            // Free users
}


/*𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹 DANGER ZONE ⚠️👇 𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹*/
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
