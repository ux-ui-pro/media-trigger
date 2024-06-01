class $643fcf18b2d2e76f$var$MediaTrigger {
    MQ;
    entry;
    exit;
    change;
    prev;
    constructor({ media: media, entry: entry = null, exit: exit = null, change: change = null }){
        if (!window.matchMedia) throw new Error("matchMedia not supported");
        this.MQ = window.matchMedia(media);
        this.entry = entry;
        this.exit = exit;
        this.change = change;
        this.prev = null;
    }
    trigger = ({ matches: matches })=>{
        if (matches === this.prev) return;
        if (matches && this.entry) this.entry(this.MQ);
        else if (!matches && this.exit) this.exit(this.MQ);
        if (this.change) this.change(this.MQ);
        this.prev = matches;
    };
    handleChange = (event)=>{
        this.trigger(event);
    };
    init() {
        this.MQ.addEventListener("change", this.handleChange);
        this.trigger(this.MQ);
    }
}
var $643fcf18b2d2e76f$export$2e2bcd8739ae039 = $643fcf18b2d2e76f$var$MediaTrigger;


export {$643fcf18b2d2e76f$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
