class MediaTrigger {
	#MQ;
	#entry;
	#exit;
	#change;
	#prev;

	constructor({ media, entry = null, exit = null, change = null }) {
		if (!window.matchMedia) {
			return;
		}

		this.#MQ = window.matchMedia(media);
		this.#handleChange = this.#handleChange.bind(this);

		this.#MQ.addEventListener('change', this.#handleChange);

		this.#entry = entry;
		this.#exit = exit;
		this.#change = change;

		this.#trigger(this.#MQ);
	}

	#trigger = ({ matches }) => {
		if (matches !== this.#prev) {
			if (matches) {
				if (this.#entry) {
					this.#entry(this.#MQ);
				}
			} else {
				if (this.#exit) {
					this.#exit(this.#MQ);
				}
			}

			if (this.#change) {
				this.#change(this.#MQ);
			}

			this.#prev = matches;
		}
	}

	#handleChange = ({ matches }) => {
		this.#trigger({ matches });
	}
}

export default MediaTrigger;
