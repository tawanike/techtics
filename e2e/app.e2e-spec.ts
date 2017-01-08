import { TechticsPage } from './app.po';

describe('techtics App', function() {
  let page: TechticsPage;

  beforeEach(() => {
    page = new TechticsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
