import { WithKidsWebPage } from './app.po';

describe('with-kids-web App', function() {
  let page: WithKidsWebPage;

  beforeEach(() => {
    page = new WithKidsWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
