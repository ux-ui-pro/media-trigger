type MediaTriggerCallback = (mq: MediaQueryList) => void;

interface MediaTriggerOptions {
  media: string;
  entry?: MediaTriggerCallback;
  exit?: MediaTriggerCallback;
  change?: MediaTriggerCallback;
}

class MediaTrigger {
  private readonly mediaQueryList?: MediaQueryList;
  private readonly entry?: MediaTriggerCallback;
  private readonly exit?: MediaTriggerCallback;
  private readonly change?: MediaTriggerCallback;

  constructor({ media, entry, exit, change }: MediaTriggerOptions) {
    if (typeof window !== 'undefined' && window.matchMedia) {
      this.mediaQueryList = window.matchMedia(media);
    }

    this.entry = entry;
    this.exit = exit;
    this.change = change;
  }

  private trigger(event: MediaQueryListEvent | MediaQueryList): void {
    if (!this.mediaQueryList) return;

    const matches = event.matches;

    if (matches && this.entry) {
      this.entry(this.mediaQueryList);
    } else if (!matches && this.exit) {
      this.exit(this.mediaQueryList);
    }

    this.change?.(this.mediaQueryList);
  }

  private handleChange = (event: MediaQueryListEvent): void => {
    this.trigger(event);
  };

  public init(): void {
    if (!this.mediaQueryList) return;

    this.mediaQueryList.addEventListener('change', this.handleChange);

    this.trigger(this.mediaQueryList);
  }

  public destroy(): void {
    if (!this.mediaQueryList) return;

    this.mediaQueryList.removeEventListener('change', this.handleChange);
  }
}

export default MediaTrigger;
