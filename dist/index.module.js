class $cf838c15c8b009ba$var$MediaTrigger {
    #MQ;
    #entry;
    #exit;
    #change;
    #prev;
    constructor({ media: media, entry: entry = null, exit: exit = null, change: change = null }){
        if (!window.matchMedia) return;
        this.#MQ = window.matchMedia(media);
        this.#handleChange = this.#handleChange.bind(this);
        this.#MQ.addEventListener("change", this.#handleChange);
        this.#entry = entry;
        this.#exit = exit;
        this.#change = change;
        this.#trigger(this.#MQ);
    }
    #trigger = ({ matches: matches })=>{
        if (matches !== this.#prev) {
            if (matches) {
                if (this.#entry) this.#entry(this.#MQ);
            } else if (this.#exit) this.#exit(this.#MQ);
            if (this.#change) this.#change(this.#MQ);
            this.#prev = matches;
        }
    };
    #handleChange = ({ matches: matches })=>{
        this.#trigger({
            matches: matches
        });
    };
}
var $cf838c15c8b009ba$export$2e2bcd8739ae039 = $cf838c15c8b009ba$var$MediaTrigger;


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
