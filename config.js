const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923194745038";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_09_25_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTczLFxuICAgICAgICA3NSxcbiAgICAgICAgMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAzMixcbiAgICAgICAgMjUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMixcbiAgICAgICAgNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDI2LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzLFxuICAgICAgICA0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MSxcbiAgICAgICAgOSxcbiAgICAgICAgODAsXG4gICAgICAgIDU3LFxuICAgICAgICA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU2LFxuICAgICAgICA5MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDQzLFxuICAgICAgICA0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDM2LFxuICAgICAgICA2MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1iMlprMmhiMkorVzN2LzMrUDB1THN6Yzd5QzNNb3hBNXpGZW8ya2lvMTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZrd05MeGlBU0Nhb05vQS1yMVd4YndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGU3NWM1MGMtMDk5Mi00MmVkLTk5ZWEtMWY4MjQ1NTkyNGMzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICA1OCxcbiAgICAgIDcxLFxuICAgICAgMjM3LFxuICAgICAgMTgsXG4gICAgICAxNixcbiAgICAgIDE4MyxcbiAgICAgIDI0LFxuICAgICAgOTQsXG4gICAgICAxMjksXG4gICAgICA5OCxcbiAgICAgIDExMixcbiAgICAgIDgxLFxuICAgICAgMTg2LFxuICAgICAgOTMsXG4gICAgICA3MixcbiAgICAgIDE3OSxcbiAgICAgIDE5NSxcbiAgICAgIDE4MixcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICAxMzYsXG4gICAgICA5MixcbiAgICAgIDIzMCxcbiAgICAgIDEwOCxcbiAgICAgIDEzNSxcbiAgICAgIDUwLFxuICAgICAgMTcwLFxuICAgICAgMTI5LFxuICAgICAgNTAsXG4gICAgICAxMzMsXG4gICAgICA1OSxcbiAgICAgIDI0OCxcbiAgICAgIDM0LFxuICAgICAgMjEsXG4gICAgICAyMjcsXG4gICAgICA4NixcbiAgICAgIDEwNSxcbiAgICAgIDQsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTRzhFRzdQNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTk0NzQ1MDM4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLDkcOF8JOGqSBMT0ZFUiDwk4aqXFxuIOGsieGtsOGugeGks1xcbiDhrInhrbDhroHhpLMgXFxu4ayJ4a2w4a6B4aSzXFxuIOGsieGtsOGugeGks1xcbiDhrInhrbDhroHhpLMgXFxu4ayJ4a2w4a6B4aSzIFxcbuGsieGtsOGugeGks1xcbiDhrInhrbDhroHhpLMgXFxu4ayJ4a2w4a6B4aSzXCIsXG4gICAgXCJsaWRcIjogXCI1MzQxNjk3ODA3NTY5ODo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pqSTFNZ0RFT2FFN3JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRUZucXhFVkRFYmZwQUFMVzNEQ3pRa25ZakVOVmNBQThmcVJXcWUycXQxYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4ZjF3eEFaQVZCMG9yREpIRUkrSS90S1N5ZGNRV0NSTjNmRTZXRnlKNTBNZ3ZDRDRJV210dW9tU21hM2hmdEQ1SDUyMm5MNTk1ZVVvV2Y0V3RwTHZEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxdmx1bkNScnorMWZsSGFGQ29FdHN0M1ZlMmZMMnhzZWdQOVdqLzZPbGxQeVAwUTd2MHA2ZTdqcjhEcHlRQ3ZybTVpaWxZQkF3SEJ6VjNvT1dDaGZqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTQ3NDUwMzg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDY3NTE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2tKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDa0ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsalUvUkhvVE5Kdi9QU0g2TXNwdGYyTXRoL2pYcGdudHV4Qk1CK1V4WDlBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk1NzY4NjgwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDY2NDA0Mjg3XCJ9Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
