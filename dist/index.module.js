class $643fcf18b2d2e76f$var$MediaTrigger {
    constructor({ media: media, entry: entry = null, exit: exit = null, change: change = null }){
        this.trigger = ({ matches: matches })=>{
            if (matches === this.prev) return;
            if (matches && this.entry) this.entry(this.MQ);
            else if (!matches && this.exit) this.exit(this.MQ);
            if (this.change) this.change(this.MQ);
            this.prev = matches;
        };
        this.handleChange = (event)=>{
            this.trigger(event);
        };
        if (!window.matchMedia) return;
        this.MQ = window.matchMedia(media);
        this.entry = entry;
        this.exit = exit;
        this.change = change;
        this.prev = null;
        this.MQ.addEventListener("change", this.handleChange);
        this.trigger(this.MQ);
    }
}
var $643fcf18b2d2e76f$export$2e2bcd8739ae039 = $643fcf18b2d2e76f$var$MediaTrigger;


export {$643fcf18b2d2e76f$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
