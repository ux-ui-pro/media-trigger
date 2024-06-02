class MediaTrigger {
  private readonly MQ: MediaQueryList;

  private readonly entry: ((mq: MediaQueryList) => void) | null;

  private readonly exit: ((mq: MediaQueryList) => void) | null;

  private readonly change: ((mq: MediaQueryList) => void) | null;

  private prev: boolean | null;

  constructor({
    media,
    entry = null,
    exit = null,
    change = null,
  }: {
    media: string;
    entry?: ((mq: MediaQueryList) => void) | null;
    exit?: ((mq: MediaQueryList) => void) | null;
    change?: ((mq: MediaQueryList) => void) | null;
  }) {
    if (!window.matchMedia) {
      return;
    }

    this.MQ = window.matchMedia(media);
    this.entry = entry;
    this.exit = exit;
    this.change = change;
    this.prev = null;
  }

  private trigger = ({ matches }: MediaQueryListEvent | MediaQueryList) => {
    if (matches === this.prev) {
      return;
    }

    if (matches && this.entry) {
      this.entry(this.MQ);
    } else if (!matches && this.exit) {
      this.exit(this.MQ);
    }

    if (this.change) {
      this.change(this.MQ);
    }

    this.prev = matches;
  };

  private handleChange = (event: MediaQueryListEvent) => {
    this.trigger(event);
  };

  public init() {
    this.MQ.addEventListener('change', this.handleChange);
    this.trigger(this.MQ);
  }
}

export default MediaTrigger;
