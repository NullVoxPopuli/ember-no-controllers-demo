import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  queryParams = {
    demo: {
      refreshModel: true,
    },
    foo: {
      refreshModel: false,
    },
  };

  async model() {
    return;
  }
}
