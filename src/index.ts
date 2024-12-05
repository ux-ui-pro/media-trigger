class MediaTrigger {
  private readonly MQ!: MediaQueryList;
  private readonly entry!: ((mq: MediaQueryList) => void) | null;
  private readonly exit!: ((mq: MediaQueryList) => void) | null;
  private readonly change!: ((mq: MediaQueryList) => void) | null;

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
  }

  private trigger = (event: MediaQueryListEvent | MediaQueryList): void => {
    const matches = event instanceof MediaQueryList ? event.matches : event.matches;

    if (matches && this.entry) {
      this.entry(this.MQ);
    } else if (!matches && this.exit) {
      this.exit(this.MQ);
    }

    this.change?.(this.MQ);
  };

  private handleChange = (event: MediaQueryListEvent): void => {
    this.trigger(event);
  };

  public init(): void {
    this.MQ.addEventListener('change', this.handleChange);
    this.trigger(this.MQ);
  }

  public destroy(): void {
    this.MQ.removeEventListener('change', this.handleChange);
  }
}

export default MediaTrigger;
