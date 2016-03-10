export class App {
  configureRouter(config, router) {
    config.title = 'Chicago Aurelia';
    config.map([
      { route: ['', 'search'], name: 'search',      moduleId: 'search',      nav: true, title: 'Search', settings: { html: '<i class="fa fa-search"></i> Search' } },
      { route: ['folders'], name: 'folders',      moduleId: 'folders',      nav: true, title: 'Folders', settings: { html: '<i class="fa fa-folder"></i> Folders' } }
    ]);

    this.router = router;
  }
}
