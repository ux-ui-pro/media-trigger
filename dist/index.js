
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $a196c1ed25598f0e$export$2e2bcd8739ae039; });
class $a196c1ed25598f0e$var$MediaTrigger {
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
var $a196c1ed25598f0e$export$2e2bcd8739ae039 = $a196c1ed25598f0e$var$MediaTrigger;


//# sourceMappingURL=index.js.map
