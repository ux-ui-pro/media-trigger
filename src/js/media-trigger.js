export const mediaTrigger = ({ media, entry, exit, change }) => {
	const MQ = window.matchMedia(media)

	const handleChange = () => trigger(MQ)

	const handleOrientationChange = () => {
		trigger(window.matchMedia(media))
	}

	const trigger = (MQ) => {
		MQ.matches ? entry?.(MQ) : exit?.(MQ)

		change?.(MQ)
	}

	MQ.addEventListener('change', handleChange)
	window.addEventListener('orientationchange', handleOrientationChange)

	trigger(MQ)
}
