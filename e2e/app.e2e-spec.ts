import { CliLatestPage } from './app.po';

describe('cli-latest App', () => {
  let page: CliLatestPage;

  beforeEach(() => {
    page = new CliLatestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
