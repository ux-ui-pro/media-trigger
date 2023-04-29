export default class MediaTrigger {
	constructor({ media, entry, exit, change }) {
		this.MQ = window.matchMedia(media)
		this.handleChange = this.handleChange.bind(this)
		this.handleOrientationChange = this.handleOrientationChange.bind(this)

		this.trigger(this.MQ)

		this.MQ.addEventListener('change', this.handleChange)
		window.addEventListener('orientationchange', this.handleOrientationChange)

		this.entry = entry
		this.exit = exit
		this.change = change

		this.trigger(this.MQ)
	}

	trigger(MQ) {
		MQ.matches ? this.entry?.(MQ) : this.exit?.(MQ)

		this.change?.(MQ)
	}

	handleChange() {
		this.trigger(this.MQ)
	}

	handleOrientationChange() {
		this.trigger(window.matchMedia(this.MQ.media))
	}
}
