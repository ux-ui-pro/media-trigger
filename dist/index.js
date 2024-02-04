
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
class $4fa36e821943b400$var$MediaTrigger {
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
var $4fa36e821943b400$export$2e2bcd8739ae039 = $4fa36e821943b400$var$MediaTrigger;


//# sourceMappingURL=index.js.map
