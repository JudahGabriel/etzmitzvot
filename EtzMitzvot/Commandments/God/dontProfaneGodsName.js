var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DontProfaneGodsName = (function (_super) {
    __extends(DontProfaneGodsName, _super);
    function DontProfaneGodsName() {
        _super.call(this);

        this.shortSummary = "Don't profane God's name.";
        this.text = "Do not profane my holy name.";
        this.book = 1 /* Leviticus */;
        this.chapter = 22;
        this.verse = 32;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 7;

        this.children = [
            new DontDestroyHolyObjects()
        ];
    }
    return DontProfaneGodsName;
})(CommandmentBase);
