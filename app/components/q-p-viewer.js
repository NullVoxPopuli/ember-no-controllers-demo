import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class QPViewerComponent extends Component {
  @service router;

  get queryParams() {
    return this.router.currentRoute?.queryParams || {};
  }

  inc = (qp) => {
    let existing = this.queryParams?.[qp] || 0;

    this.router.transitionTo({
      queryParams: { ...this.queryParams, [qp]: existing },
    });
  };
}
