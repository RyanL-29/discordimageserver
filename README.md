# discordimageserver

Based on Fivem GCPhone https://github.com/manueljlz/gcphone to develope this extension

Need to host your self

SetUp 
Create a folder call lib in the root folder
Create a file call config.env inside the folder that you just created

config.env TEMPLATE

DISCORD_TOKEN= Go to https://discord.com/developers/applications create a bot and get it
SERVERID= Discord Server that you want to store those photos. Just google how to get it
PHOTO= Actually this is the Text channel ID that you want to store those photos. Just google how to get it

this application is listen on server 5000 port. Do a reverse proxy with ngnix. Google how to do it

Find this in the gcphone config that the config inside the html folder
  "//": "REQUIRE https://github.com/citizenfx/screenshot-basic or set false",
  "enableTakePhoto": true,
  "fileUploadService_Url": "https://wew.wtf/upload.php",
  "fileUploadService_Field": "files[]",


  and change it to

    "//": "REQUIRE https://github.com/citizenfx/screenshot-basic or set false",
  "enableTakePhoto": true,
  "fileUploadService_Url": "<your server domain name or ip>",
  "fileUploadService_Field": "screenshot",