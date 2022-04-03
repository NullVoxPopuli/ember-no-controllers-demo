import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class QPViewerComponent extends Component {
  @service router;

  get queryParams() {
    return this.router.currentRoute?.queryParams || {};
  }

  nextQps = (qp) => {
    let existing = this.queryParams?.[qp] || 0;
    let nextQp = parseInt(existing, 10) + 1;

    return { ...this.queryParams, [qp]: nextQp };
  };

  nextForQp = (qp) => {
    return `/?${new URLSearchParams(this.nextQps(qp))}`;
  };

  inc = (qp, event) => {
    event?.preventDefault();

    this.router.transitionTo({
      queryParams: this.nextQps(qp),
    });

    // if you want to use just URLs / hrefs
    // this.router.transitionTo(this.nextForQp(qp));
  };
}
