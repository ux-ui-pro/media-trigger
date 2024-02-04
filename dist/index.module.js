class $cf838c15c8b009ba$var$MediaTrigger {
    constructor({ media: media, entry: entry, exit: exit, change: change }){
        this.MQ = window.matchMedia(media);
        this.MQ.addEventListener("change", this.handleChange);
        this.prev = this.MQ.matches;
        this.entry = entry;
        this.exit = exit;
        this.change = change;
        this.trigger();
    }
    trigger = ()=>{
        const current = this.MQ.matches;
        if (current !== this.prev) {
            current ? this.entry?.(this.MQ) : this.exit?.(this.MQ);
            this.change?.(this.MQ);
            this.prev = current;
        }
    };
    handleChange = ()=>{
        this.trigger();
    };
}
var $cf838c15c8b009ba$export$2e2bcd8739ae039 = $cf838c15c8b009ba$var$MediaTrigger;


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
