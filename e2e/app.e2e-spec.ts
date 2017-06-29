import { NgHomePage } from './app.po';

describe('ng-home App', () => {
  let page: NgHomePage;

  beforeEach(() => {
    page = new NgHomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
