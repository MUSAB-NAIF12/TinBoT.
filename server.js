const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://iam-bot-hi.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//كود برودكاست

client.on("message", message => {
  if (message.content.startsWith(prefix + "bl")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(" ");
    message.guild.members.forEach(m => {
      m.send(`${argresult}\n ${m}`);
    });
    message.channel.send(
      `\`${message.guild.members.size}\` : عدد الاعضاء المستلمين`
    );
    message.delete();
  }
});

client.on("ready", () => {
  console.log(`----------------`);
  console.log(`Desert Bot- Script By : osama tech`);
  console.log(`----------------`);
  console.log(
    `ON ${client.guilds.size} Servers '     Script By : osama tech ' `
  );

client.on("message", LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "+p dnby is king 👑") {
    LGD_GHASSAN.channel.send(" +p insta : dnby 🔥 ");
  }
});
client.on("message", LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "السلام عليكم") {
    LGD_GHASSAN.channel.send("``وعليكم السلام ``");
  }
});
client.on("message", LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === ".") {
    LGD_GHASSAN.channel.send(" ``أطلق من ينقط``");
  }
});
client.on("message", LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "+p dnby is back 🔥") {
    LGD_GHASSAN.channel.send("+p dnby is here 🔥");
    }
});
client.on("message", LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "السلام عليكم") {
    LGD_GHASSAN.channel.send("``وعليكم السلام ``");
  }
});
client.on("message", LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === ".") {
    LGD_GHASSAN.channel.send(" ``أطلق من ينقط``");
  }
});
client.on("message", LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "+p dnby is back 🔥") {
    LGD_GHASSAN.channel.send("+p dnby is here 🔥");
  }
});
client.on("message", LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "+p dnby is here 🔥") {
    LGD_GHASSAN.channel.send("+p dnby is back 🔥");
  }
});
client.on("message", LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "الو") {
    LGD_GHASSAN.channel.send("هلا");
  }
});
client.on("message", LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "+p dnby is king 👑") {
    LGD_GHASSAN.channel.send("+p insta : dnby 🔥");
  }
});
client.on("message", LGD_GHASSAN => {
  if (LGD_GHASSAN.author.bot) return;
  if (LGD_GHASSAN.content === "+p dnby is back 🔥") {
    LGD_GHASSAN.channel.send("+p dnby is king 👑");
  }
});
