
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
var $4fa36e821943b400$export$2e2bcd8739ae039 = $4fa36e821943b400$var$MediaTrigger;


//# sourceMappingURL=index.js.map
