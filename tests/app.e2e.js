describe('app', function() {
  it('should show a heading', function() {
    browser.get('/');
    expect(element(by.css('h1')).getText()).toEqual('My First Angular App');
  });

  it('should hide the heading if toggle button is clicked', function() {
    browser.get('/');
    expect(element(by.css('h1')).getText()).toEqual('My First Angular App');
    element(by.css('button')).click();
    expect(element(by.css('h1')).isPresent()).toEqual(false);
  });
});