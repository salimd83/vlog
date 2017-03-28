import { VlogPage } from './app.po';

describe('vlog App', () => {
  let page: VlogPage;

  beforeEach(() => {
    page = new VlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
