/**
 * Run it with command: .\node_modules\.bin\wdio wdio.conf.js
 * @type {ok}
 */
require('dotenv').config();

const assert = require("assert");
// const request = require('supertest');
// const got = require('got');
// const fs = require('fs');
// const expect = require('chai').expect;

describe('MH Marketplace', function () {

  // let Cookie;

  it("should login with user credentials", function () {
    browser.url("/login.php");

    browser.setValue('input[name="accountName"]', process.env.MH_USER);
    browser.setValue('input[name="password"]', process.env.MH_PASS);

    browser.click('button[name="doLogin"]');

    // Cookie = browser.getCookie();

    let title = browser.getTitle();
    assert.equal(title, "MouseHunt | Hunter's Camp");
  });


  it("should go to marketplace", function () {

    // open marketplace popup
    browser.click('.mousehuntHud-marketPlace');

    // open Buy tab
    browser.click('[data-section="buy"]');

    // make sure the tab is open (@todo: replace with waitForVisible)
    browser.pause(2000);

    // open dropdown
    browser.click(".select2-choice.select2-default");

    browser.waitForVisible(".select2-results-dept-1");

    // browser.click("//*[@id=\"select2-result-label-1644\"]");

    // @todo: below code is not yet working. Try to replace it iwth browser.execute

    // click on first selectable item
    let el = browser.elements(".select2-results-dept-1");
    el[0].click();

    /*
    ACTUAL HTML
    <li class="select2-results-dept-0 select2-result select2-result-unselectable select2-result-with-children">
      <ul class="select2-result-sub">
        <li class="select2-results-dept-1 select2-result select2-result-selectable">
          <div class="select2-result-label" id="select2-result-label-4892" role="option">     <-- to je klikabilno
     */

    // assert.equal(text, "Search for an item to buy");
  });


  it("should have camp title", function () {
    browser.url("https://www.mousehuntgame.com");
    let title = browser.getTitle();
    assert.equal(title, "MouseHunt | Hunter's Camp");
  });
});


/*
got.post("https://www.mousehuntgame.com/managers/ajax/users/marketplace.php", {
      headers: {
        "cookie": JSON.stringify(Cookie),
        "origin": "https://www.mousehuntgame.com",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.8",
        "x-requested-with": "XMLHttpRequest",
        "Pragma": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json, text/javascript",
"Cache-Control": "no-cache",
  "Referer": "https://www.mousehuntgame.com/",
  "dnt": "1"
},
body: {
  "sn": "Hitgrab",
    "hg_is_ajax": 1,
    "action": "details",
    "item_id": "super_brie_cheese",
    "section": "buy",
    "uh": "EiYrqVS3"
},
form: true
})
.then(response => {
  const data = JSON.parse(response.body);

  console.log("hevreka");
  console.log(data);

  fs.writeFile("./data/sb.json", response.body, function(err) {
    if (err) {
      assert.fail(err);
    }
    else {
      console.log("The file was saved!");

      assert.notEqual(data.success, 0);
    }
  });
})
.catch(error => {
  console.log(error.message);
  assert.fail(error.message);
});
 */
