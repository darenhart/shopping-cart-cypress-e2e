module.exports = {

  'Add products to cart' : function (browser) {

    var data = ['Batman', 'PS3'];

    browser.url(browser.launchUrl)
      .waitForElementVisible('body', 3000);

    for (var i = 0; i < data.length; i++) {
      browser.setValue('@searchInput', data[i])
        .click('@searchSubmit')
        .waitForElementVisible('@firstProductResult', 3000)
        .click('@firstProductResult')
        .waitForElementVisible('@addToCartButton', 3000)
        .click('@addToCartButton');
    }

    browser.click('@myCartElement')
      .click('@openCartButton')
      .waitForElementVisible('@firstCartItemResult', 3000)
      .assert.containsText('@firstCartItemResult', data[0])
      .assert.containsText('@secondCartItemResult', data[1])
      .end();
  }
};
