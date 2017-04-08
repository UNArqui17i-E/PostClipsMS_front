import { PostClipsFEPage } from './app.po';

describe('post-clips-fe App', () => {
  let page: PostClipsFEPage;

  beforeEach(() => {
    page = new PostClipsFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
