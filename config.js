const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="mackmoses127@gmail.com"
global.location="Dar es salaam,Tanzania."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "https://whatsapp.com/channel/0029VaSqLqfI1rcmkLScGR3N"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "East Africa/Dodoma";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "255622266563" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,255622266563";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255622266563";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255622266563,255xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_21_04_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTksXG4gICAgICAgIDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2LFxuICAgICAgICAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg3LFxuICAgICAgICA4NCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg4LFxuICAgICAgICA5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTDhpK1FNdVFyRXp2Wm16eHNYbFhYVVpycVpSV0NQRnl1cnVyOVNibTVhRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVjBpaTRrS3FTUDZlSkRSNDJmRHF2d1wiLFxuICBcInBob25lSWRcIjogXCJkYmU2ZjI5ZS1kYTA0LTQzNzEtODFkNi1kY2I0YzBlYWY2ZGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICAxNjAsXG4gICAgICAxMTksXG4gICAgICAyNDAsXG4gICAgICAxMTAsXG4gICAgICAxNTEsXG4gICAgICAzNCxcbiAgICAgIDE1LFxuICAgICAgNDEsXG4gICAgICAxODksXG4gICAgICAxODQsXG4gICAgICAyMTQsXG4gICAgICA2MixcbiAgICAgIDIzMSxcbiAgICAgIDU1LFxuICAgICAgMTExLFxuICAgICAgOTMsXG4gICAgICAzMixcbiAgICAgIDE5MCxcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICAxMTQsXG4gICAgICA1NCxcbiAgICAgIDExNSxcbiAgICAgIDYxLFxuICAgICAgNSxcbiAgICAgIDIwNSxcbiAgICAgIDE1MCxcbiAgICAgIDI1MCxcbiAgICAgIDQ4LFxuICAgICAgNjAsXG4gICAgICAxNDgsXG4gICAgICAyMzUsXG4gICAgICAxODQsXG4gICAgICAyNDIsXG4gICAgICAxMzMsXG4gICAgICA5MixcbiAgICAgIDE1MCxcbiAgICAgIDU1LFxuICAgICAgMTQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpMRFY1NkM4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2MjIyNjY1NjM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkB0ZXJfMzdcIixcbiAgICBcImxpZFwiOiBcIjExODQ1NTU1MDM2OTg1NjoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xDbzR0a0ZFUGZncjdFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM0Q1aU8yWmQ3ZkxvdkxOSWRFWFhPY2o1UFNISjA4T3luTHlTS1Bta3Bnbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsMUd2NGc4citLQkNNYUVTandGVHl1VTlUR01OVnQvaVlJN29qY1l4dFJqUElvb0cvOW9LN0RxZ2xkcmdYOEJFZUNGMnp3OGI3T0tDRnVwdkhQMmFEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1RFJTSDNuemNjR1ZmMW1vRlA4Z0dwTnhzRU9GYWN1UGF5SExRWitHQkRKTVU3NXExMTRiVkxzVWpnMzFiUlZBck1Ham52K1Z1TGVaS0RSdlZzQkZCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2MjIyNjY1NjM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQxNTU2NjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQU1hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBTWC5qc29uIjogIntcImtleURhdGFcIjpcIjBYQ0l5OUZKNmI3MFZ6djA0RE1GZVB6dVNrNiswai9hbHdQbVRrRnQzRWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUzMDQzNDYwOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE0MTU1NjQ3NzQ1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "mack_37",
  packname: process.env.PACK_NAME || "@ter_37",
  botname : process.env.BOT_NAME  || "@ter_37",
  ownername:process.env.OWNER_NAME|| "mack_37",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
