import { LazyLoadingStorePage } from './app.po';

describe('lazy-loading-store App', () => {
  let page: LazyLoadingStorePage;

  beforeEach(() => {
    page = new LazyLoadingStorePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
