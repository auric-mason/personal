import { ConfigurationPage } from './app.po';

describe('configuration App', () => {
  let page: ConfigurationPage;

  beforeEach(() => {
    page = new ConfigurationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
