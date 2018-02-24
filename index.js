"use strict";
const webdriverio = require("webdriverio");

const options = {
    desiredCapabilities: {
        browserName: "firefox"
    }
};

webdriverio
    .remote(options)
    .init()
    .url("http://www.mousehuntgame.com")
    .getTitle().then(function (title) {
        console.log("Title was: " + title);
    })
    .end()
    .catch(function (err) {
        console.log(err);
    });


