import { TestonePage } from './app.po';

describe('testone App', function() {
  let page: TestonePage;

  beforeEach(() => {
    page = new TestonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
