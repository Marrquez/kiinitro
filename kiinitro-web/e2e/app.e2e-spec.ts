import { KiinitroWebPage } from './app.po';

describe('kiinitro-web App', () => {
  let page: KiinitroWebPage;

  beforeEach(() => {
    page = new KiinitroWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
