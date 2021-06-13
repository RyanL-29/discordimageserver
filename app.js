const express = require('express');
const fileUpload = require('express-fileupload');
const Discord = require("discord.js");
const dotenv = require('dotenv');
dotenv.config({ path: './lib/config.env' });
var app = express();
const client = new Discord.Client();

app.use(fileUpload({
    createParentPath: true
}));

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`${getdate()}: Discord Image Server`);
});

app.post('/', async function (request, response) {
    //console.log(request);
    try {
        if (!request.files) {
            response.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            var file = await client.guilds.cache.get(process.env.SERVERID).channels.cache.get(process.env.PHOTO).send({ files: [request.files.screenshot.data] });
            var fileLink = file.attachments.map(({ attachment }) => attachment)[0];
            //send response
            response.send({
                status: true,
                url: fileLink
            });
        }
    } catch (err) {
        response.status(500).send(err);
    }
});

function getdate() {
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = ("0" + date_ob.getHours()).slice(-2);

    // current minutes
    let minutes = ("0" + date_ob.getMinutes()).slice(-2);

    // current seconds
    let seconds = ("0" + date_ob.getSeconds()).slice(-2);

    var current = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

    return current;
};

client.login(process.env.DISCORD_TOKEN);

var port = 5000;
app.listen(port);
console.log("Listening on: " + port)