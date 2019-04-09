# Discord-BOT
discord bot made with nodejs

first in terminal type these commands given below :-
npm init    //for package.json
npm install discord.js --save   //to install discord package to support your app on discord app

after that visit https://discordapp.com  
sign up and create a server 

after that visit https://discordapp.com/developers  
click on "new application" then name your app

TO STORE UR CLIENTID ,INVITE LINK, TOKEN create BOTid.txt file in ur folder
1.copy client id and paste it in BOTid.txt
2.select bot from menu > create it > //copy token and paste it in BOT ID.txt
3.select 0AUTH from menu and click on add redirect ,paste this link https://discordapp.com/api/oauth2/authorize?client_id=//here_ur_clientid//&scope=bot&permissions=1 //note:paste ur clientid in this link
3.1 under 0AUTH URL GENERATOR , select the link and save the changes

after that visit your invite link and select the server and click ok... now ur bot is hosted on the server

BOT ID.TXT
client id: __________________ //here ur client id
invite link: https://discordapp.com/api/oauth2/authorize?client_id=//here_ur_clientid//&scope=bot&permissions=1 //invite link
token: ______________________ // ur token here

SPECIAL INFO:-
in app.js
last code i.e client.login("//here put ur token//") 

Run ur app.js in terminal
node app.js
