const assert = require("assert");
const request = require('supertest');

describe('MH login', function () {
  it("should login with user credentials", function () {
    browser.url("/login.php");

    browser.setValue('input[name="accountName"]', 'Ivo Tijan');
    browser.setValue('input[name="password"]', 'antun01');

    browser.click('button[name="doLogin"]');

    let title = browser.getTitle();
    assert.equal(title, "MouseHunt | Hunter's Camp");
  });

  it("should retrieve AJAX data", function () {
    ///managers/ajax/users/marketplace.php

  });


  /*
  it('should create a MH session', function (done) {
    request()
      .post('https://www.mousehuntgame.com/login.php')
      .set('Content-Type', 'multipart/form-data')
      .set('Accept', 'text/html,application/xhtml+xml,application/xml;')
      .send({"accountName": "Ivo Tijan", "password": "antun01", "doLogin": "true"})
      .end(function (err, res) {
        console.log("JUPI!");
        console.log(err);
        console.log(res.body);
        // res.body.id.should.equal('1');
        // res.body.short_name.should.equal('Test user');
        // res.body.email.should.equal('user_test@example.com');
        // Save the cookie to use it later to retrieve the session
        // Cookies = res.headers['set-cookie'].pop().split(';')[0];
        done();
      });
  });
  */

  // it("should have camp title", function () {
  //   browser.url("https://www.mousehuntgame.com");
  //   let title = browser.getTitle();
  //   assert.equal(title, "MouseHunt | Hunter's Camp");
  // });
});

