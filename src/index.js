class MediaTrigger {
	constructor({ media, entry, exit, change }) {
		this.MQ = window.matchMedia(media);
		this.MQ.addEventListener('change', this.handleChange);
		this.prev = this.MQ.matches;

		this.entry = entry;
		this.exit = exit;
		this.change = change;

		this.trigger();
	}

	trigger = () => {
		const current = this.MQ.matches;

		if (current !== this.prev) {
			current ? this.entry?.(this.MQ) : this.exit?.(this.MQ);
			this.change?.(this.MQ);
			this.prev = current;
		}
	};

	handleChange = () => {
		this.trigger();
	};
}

export default MediaTrigger;
