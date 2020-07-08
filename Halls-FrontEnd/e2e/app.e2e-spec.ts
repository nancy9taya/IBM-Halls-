import { HallsFrontendPage } from './app.po';

describe('halls-frontend App', function() {
  let page: HallsFrontendPage;

  beforeEach(() => {
    page = new HallsFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
