class $cf838c15c8b009ba$export$2e2bcd8739ae039 {
    constructor({ media: media , entry: entry , exit: exit , change: change  }){
        this.MQ = window.matchMedia(media);
        this.handleChange = this.handleChange.bind(this);
        this.handleOrientationChange = this.handleOrientationChange.bind(this);
        this.trigger(this.MQ);
        this.MQ.addEventListener("change", this.handleChange);
        window.addEventListener("orientationchange", this.handleOrientationChange);
        this.entry = entry;
        this.exit = exit;
        this.change = change;
    }
    trigger(MQ) {
        MQ.matches ? this.entry?.(MQ) : this.exit?.(MQ);
        this.change?.(MQ);
    }
    handleChange() {
        this.trigger(this.MQ);
    }
    handleOrientationChange() {
        this.trigger(window.matchMedia(this.MQ.media));
    }
}


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
