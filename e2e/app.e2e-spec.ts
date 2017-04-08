import { UserManagerPage } from './app.po';

describe('user-manager App', () => {
  let page: UserManagerPage;

  beforeEach(() => {
    page = new UserManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
