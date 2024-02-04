class $cf838c15c8b009ba$var$MediaTrigger {
    constructor({ media: media, entry: entry, exit: exit, change: change }){
        if (!window.matchMedia) return;
        if (typeof entry !== "function" || typeof exit !== "function" || typeof change !== "function") return;
        this.MQ = window.matchMedia(media);
        this.handleChange = this.handleChange.bind(this);
        this.MQ.addEventListener("change", this.handleChange);
        this.entry = entry ?? null;
        this.exit = exit ?? null;
        this.change = change ?? null;
        this.trigger(this.MQ);
    }
    trigger = ({ matches: matches })=>{
        if (matches !== this.prev) {
            matches ? this.entry?.(this.MQ) : this.exit?.(this.MQ);
            this.change?.(this.MQ);
            this.prev = matches;
        }
    };
    handleChange = ({ matches: matches })=>{
        this.trigger({
            matches: matches
        });
    };
}
var $cf838c15c8b009ba$export$2e2bcd8739ae039 = $cf838c15c8b009ba$var$MediaTrigger;


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
