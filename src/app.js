export class App {
  configureRouter(config, router) {
    config.title = 'Chicago Aurelia';
    config.map([
      { route: ['', 'search'], name: 'search',      moduleId: 'search',      nav: true, title: 'Search', settings: { html: '<i class="fa fa-search"></i> Search' } }
    ]);

    this.router = router;
  }
}
