class MediaTrigger {
	constructor({ media, entry, exit, change }) {
		if (!window.matchMedia) {
			return;
		}

		if (
			typeof entry !== 'function' ||
			typeof exit !== 'function' ||
			typeof change !== 'function'
		) {
			return;
		}

		this.MQ = window.matchMedia(media);
		this.handleChange = this.handleChange.bind(this);

		this.MQ.addEventListener('change', this.handleChange);

		this.entry = entry ?? null;
		this.exit = exit ?? null;
		this.change = change ?? null;

		this.trigger(this.MQ);
	}

	trigger = ({ matches }) =>  {
		if (matches !== this.prev) {
			matches ? this.entry?.(this.MQ) : this.exit?.(this.MQ);

			this.change?.(this.MQ);
			this.prev = matches;
		}
	}

	handleChange = ({ matches }) =>  {
		this.trigger({ matches });
	}
}

export default MediaTrigger;
