import { PLMPage } from './app.po';

describe('plm App', function() {
  let page: PLMPage;

  beforeEach(() => {
    page = new PLMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
