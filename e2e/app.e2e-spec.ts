import { SpaceAppPage } from './app.po';

describe('space-app App', function() {
  let page: SpaceAppPage;

  beforeEach(() => {
    page = new SpaceAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
