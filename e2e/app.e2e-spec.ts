import { PilotprojectPage } from './app.po';

describe('pilotproject App', function() {
  let page: PilotprojectPage;

  beforeEach(() => {
    page = new PilotprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
