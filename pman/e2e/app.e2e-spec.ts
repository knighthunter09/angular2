import { PmanPage } from './app.po';

describe('pman App', function() {
  let page: PmanPage;

  beforeEach(() => {
    page = new PmanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
