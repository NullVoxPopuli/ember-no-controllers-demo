import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class QPViewerComponent extends Component {
  @service router;

  get queryParams() {
    return this.router.currentRoute?.queryParams || {};
  }

  nextQps = (qp) => {
    let existing = this.queryParams?.[qp] || 0;
    return { ...this.queryParams, [qp]: existing };
  };

  nextForQp = (qp) => {
    return `/?${new URLSearchParams(this.nextQps(qp))}`;
  };

  inc = (qp, event) => {
    event?.preventDefault();
    // Does not work without adding qps to controller
    // this.router.transitionTo({
    //   queryParams: this.nextQps(qp),
    // });
    this.router.transitionTo(this.nextForQp(qp));
  };
}
