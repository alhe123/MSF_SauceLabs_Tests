describe('CDBU Modern Software Factory UI Test - RaffleAh-env Environment', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://ah-preprod.cdbu.io');
    element(by.css('[name="name"]')).sendKeys('Selenium Test User\ue007');
    //element(by.buttonText('submit')).click();
    });
});
