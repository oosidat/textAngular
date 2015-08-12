// spec.js
describe('insertImage', function() {

  var IMAGE_LINK = 'http://www.newstalk1010.com/pics/Feeds/Articles/2015723/1319515/Cat.jpg';
  var taEditor = element(by.model('htmlContent'));

  beforeEach(function() {
    browser.get('');
    browser.waitForAngular();
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('textAngular :: Lightweight Angular.js, Javascript Wysiwyg/Text-Editor');
  });

  it('should have a prefilled textangular editor', function() {
    expect(taEditor.isPresent()).toBe(true);
    taEditor.evaluate('htmlContent')
      .then(function(val) {
        expect(typeof val).toBe('string');
        expect(val).not.toBe(null);
        expect(val).not.toBe('');
      }
    );
  });

  it('should be able to remove text and insert image', function(done) {
    var taContentEditable = element.all(by.model('html')).first();

    taContentEditable.clear();
    taContentEditable.sendKeys(protractor.Key.DELETE);

    taEditor.evaluate('htmlContent')
      .then(function(val) {
        expect(typeof val).toBe('string');
        expect(val).not.toBe(null);
        expect(val).toBe('');
      }
    );

    var insertImageBtn = element(by.css('[name="insertImage"]'));
    insertImageBtn.click();
    setTimeout(function() {
      var alert = browser.switchTo().alert();
      alert.sendKeys(IMAGE_LINK);
      alert.accept();

      taEditor.evaluate('htmlContent')
        .then(function(val) {
          expect(typeof val).toBe('string');
          expect(val).not.toBe(null);
          expect(val).not.toBe('');
          expect(val).toBe('<p><img src="' + IMAGE_LINK + '"/><br/></p>');
          done();
        }
      );
    }, 1500);
  });

});
