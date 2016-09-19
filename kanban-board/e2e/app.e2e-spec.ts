import { KanbanBoardPage } from './app.po';

describe('kanban-board App', function() {
  let page: KanbanBoardPage;

  beforeEach(() => {
    page = new KanbanBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
