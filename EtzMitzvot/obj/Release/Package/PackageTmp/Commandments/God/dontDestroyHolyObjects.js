var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DontDestroyHolyObjects = (function (_super) {
    __extends(DontDestroyHolyObjects, _super);
    function DontDestroyHolyObjects() {
        _super.call(this);

        this.shortSummary = "Don't destroy God's holy objects.";
        this.text = "You must destroy all the places where the nations you are dispossessing served their gods, whether on high mountains, on hills, or under some leafy tree. Break down their altars, smash their standing-stones to pieces, burn up their sacred poles completely and cut down the carved images of their gods. Exterminate their name from that place. But you are not to treat the LORD your God this way.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 12;
        this.verse = 4;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 1 /* Recognized */;
        this.messianicObservance = 1 /* Recognized */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 8;

        this.children = [];
    }
    return DontDestroyHolyObjects;
})(CommandmentBase);
