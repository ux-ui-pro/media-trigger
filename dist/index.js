
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
class $4fa36e821943b400$var$MediaTrigger {
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
var $4fa36e821943b400$export$2e2bcd8739ae039 = $4fa36e821943b400$var$MediaTrigger;


//# sourceMappingURL=index.js.map
