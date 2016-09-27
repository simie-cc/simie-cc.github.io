import { SimieCcPage } from './app.po';

describe('simie-cc App', function() {
  let page: SimieCcPage;

  beforeEach(() => {
    page = new SimieCcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
