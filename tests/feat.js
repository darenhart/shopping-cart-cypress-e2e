module.exports = {

  'Demo test' : function (browser) {
    browser.url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .setValue('input[id=search_input]', 'Batman')
      .click('form[name="search_form"] button[type="submit"]').click()
      .end();
  }
};
