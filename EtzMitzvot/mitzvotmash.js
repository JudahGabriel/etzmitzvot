var CommandmentBase = (function () {
    function CommandmentBase() {
        this.children = [];
    }
    return CommandmentBase;
})();
///<reference path='../commandmentBase.ts' />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AcknowledgeGodAsHoly = (function (_super) {
    __extends(AcknowledgeGodAsHoly, _super);
    function AcknowledgeGodAsHoly() {
        _super.call(this);

        this.shortSummary = "Acknowledge God as holy.";
        this.text = "I must be acknowledged as holy by the Israelites.";
        this.book = 1 /* Leviticus */;
        this.chapter = 22;
        this.verse = 32;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 6;

        this.children = [
            new FearGod(), new BlessGodAfterEating(), new DontCurseGod(), new DontTemptGod()
        ];
    }
    return AcknowledgeGodAsHoly;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var BlessGodAfterEating = (function (_super) {
    __extends(BlessGodAfterEating, _super);
    function BlessGodAfterEating() {
        _super.call(this);

        this.shortSummary = "Bless God after eating.";
        this.text = "When you have eaten and are satisfied, praise the LORD your God for the good land he has given you.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 8;
        this.verse = 10;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 1 /* Recognized */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 85;

        this.children = [];
    }
    return BlessGodAfterEating;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var ClingToGod = (function (_super) {
    __extends(ClingToGod, _super);
    function ClingToGod() {
        _super.call(this);

        this.shortSummary = "Cling to God and serve him.";
        this.text = "Fear the LORD your God and serve him. Hold fast to him and take your oaths in his name.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 10;
        this.verse = 20;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 5;

        this.children = [];
    }
    return ClingToGod;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontCurseGod = (function (_super) {
    __extends(DontCurseGod, _super);
    function DontCurseGod() {
        _super.call(this);

        this.shortSummary = "Don't curse God.";
        this.text = "You are not to curse God, and you are not to curse a leader of your people.";
        this.book = 0 /* Exodus */;
        this.chapter = 22;
        this.verse = 27;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 26;

        this.children = [
            new DontProfaneGodsName()
        ];
    }
    return DontCurseGod;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
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
///<reference path='../commandmentBase.ts' />
var DontFearFalseProphet = (function (_super) {
    __extends(DontFearFalseProphet, _super);
    function DontFearFalseProphet() {
        _super.call(this);

        this.shortSummary = "Don't fear false prophets.";
        this.text = "If what a prophet proclaims in the name of the LORD does not take place or come true, that is a message the LORD has not spoken. That prophet has spoken presumptuously. Do not be afraid of him.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 18;
        this.verse = 22;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 45;

        this.children = [];
    }
    return DontFearFalseProphet;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
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
///<reference path='../commandmentBase.ts' />
var DontProphesyFalsely = (function (_super) {
    __extends(DontProphesyFalsely, _super);
    function DontProphesyFalsely() {
        _super.call(this);

        this.shortSummary = "Don't prophesy falsely.";
        this.text = "But a prophet who presumes to speak in my name anything I have not commanded him to say, or a prophet who speaks in the name of other gods, must be put to death.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 18;
        this.verse = 20;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 44;

        this.children = [
            new DontFearFalseProphet()
        ];
    }
    return DontProphesyFalsely;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontTemptGod = (function (_super) {
    __extends(DontTemptGod, _super);
    function DontTemptGod() {
        _super.call(this);

        this.shortSummary = "Don't tempt God.";
        this.text = "You shall not tempt the LORD your God.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 6;
        this.verse = 16;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 10;

        this.children = [];
    }
    return DontTemptGod;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var FearGod = (function (_super) {
    __extends(FearGod, _super);
    function FearGod() {
        _super.call(this);

        this.shortSummary = "Fear the LORD your God.";
        this.text = "Fear the LORD your God.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 10;
        this.verse = 20;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 5;

        this.children = [
            new ClingToGod(), new ListenToGodsProphet()
        ];
    }
    return FearGod;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var KnowGodExists = (function (_super) {
    __extends(KnowGodExists, _super);
    function KnowGodExists() {
        _super.call(this);

        this.shortSummary = "Know that God exists.";
        this.text = "I am the LORD your God, who brought you out of the land of Egypt, out of the abode of slavery.";
        this.book = 0 /* Exodus */;
        this.chapter = 20;
        this.verse = 2;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 1;

        this.children = [
            new KnowGodIsOne(), new AcknowledgeGodAsHoly()
        ];
    }
    return KnowGodExists;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var KnowGodIsOne = (function (_super) {
    __extends(KnowGodIsOne, _super);
    function KnowGodIsOne() {
        _super.call(this);

        this.shortSummary = "Know that God is one.";
        this.text = "Hear, O Israel: The LORD our God, the LORD is one.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 6;
        this.verse = 4;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 3;

        this.children = [];
    }
    return KnowGodIsOne;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var ListenToGodsProphet = (function (_super) {
    __extends(ListenToGodsProphet, _super);
    function ListenToGodsProphet() {
        _super.call(this);

        this.shortSummary = "Listen to the prophet that God sends.";
        this.text = "The LORD your God will raise up for you a prophet like me from among your own brothers. You must listen to him.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 18;
        this.verse = 15;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 9;

        this.children = [
            new DontProphesyFalsely()
        ];
    }
    return ListenToGodsProphet;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var LoveGodWithHeartSoulStrength = (function (_super) {
    __extends(LoveGodWithHeartSoulStrength, _super);
    function LoveGodWithHeartSoulStrength() {
        _super.call(this);

        this.shortSummary = "Love God with all your being.";
        this.text = "Love the LORD your God with all your heart and with all your soul and with all your strength.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 6;
        this.verse = 5;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 4;

        this.children = [
            new KeepAllGodsCommandments(), new KnowGodExists()
        ];
    }
    return LoveGodWithHeartSoulStrength;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontBearGrudges = (function (_super) {
    __extends(DontBearGrudges, _super);
    function DontBearGrudges() {
        _super.call(this);

        this.shortSummary = "Don't bear grudges.";
        this.text = "Do not seek revenge or bear a grudge against one of your people, but love your neighbor as yourself. I am the LORD.";
        this.book = 0 /* Exodus */;
        this.chapter = 19;
        this.verse = 18;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 21;

        this.children = [
            new DontTakeRevenge()
        ];
    }
    return DontBearGrudges;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontEmbarrassOthers = (function (_super) {
    __extends(DontEmbarrassOthers, _super);
    function DontEmbarrassOthers() {
        _super.call(this);

        this.shortSummary = "Don't embarrass others.";
        this.text = "Do not hate your brother in your heart. Rebuke your neighbor frankly so you will not share in his guilt.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 17;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 17;

        this.children = [];
    }
    return DontEmbarrassOthers;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontHateBrother = (function (_super) {
    __extends(DontHateBrother, _super);
    function DontHateBrother() {
        _super.call(this);

        this.shortSummary = "Don't hate your brother.";
        this.text = "Do not hate your brother in your heart.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 17;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 15;

        this.children = [
            new DontEmbarrassOthers(), new DontSpeakEvil(), new DontBearGrudges(), new DontOppressWeak(), new RebukeFrankly()
        ];
    }
    return DontHateBrother;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontOppressWeak = (function (_super) {
    __extends(DontOppressWeak, _super);
    function DontOppressWeak() {
        _super.call(this);

        this.shortSummary = "Don't oppress widows or orphans.";
        this.text = "Do not take advantage of a widow or an orphan. If you do and they cry out to me, I will certainly hear their cry. My anger will be aroused, and I will kill you with the sword; your wives will become widows and your children fatherless.";
        this.book = 0 /* Exodus */;
        this.chapter = 22;
        this.verse = 21;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 18;

        this.children = [];
    }
    return DontOppressWeak;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontSpeakEvil = (function (_super) {
    __extends(DontSpeakEvil, _super);
    function DontSpeakEvil() {
        _super.call(this);

        this.shortSummary = "Don't speak evil of your brother.";
        this.text = "Do not go about spreading slander among your people.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 16;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 19;

        this.children = [];
    }
    return DontSpeakEvil;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontTakeRevenge = (function (_super) {
    __extends(DontTakeRevenge, _super);
    function DontTakeRevenge() {
        _super.call(this);

        this.shortSummary = "Don't take revenge.";
        this.text = "Do not seek revenge or bear a grudge against one of your people, but love your neighbor as yourself. I am the LORD.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 18;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 20;

        this.children = [];
    }
    return DontTakeRevenge;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var HonorTheElderly = (function (_super) {
    __extends(HonorTheElderly, _super);
    function HonorTheElderly() {
        _super.call(this);

        this.shortSummary = "Honor the elderly.";
        this.text = "Rise in the presence of the aged, show respect for the elderly and revere your God. I am the LORD.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 32;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 1 /* Recognized */; // Recognized, because the majority of Jews, Messianics, and Christians don't actually rise in the presence of the aged, but do respect and honor the elderly, or at the very least teach it.
        this.messianicObservance = 1 /* Recognized */;
        this.jewishObservance = 1 /* Recognized */;
        this.number = 23;

        this.children = [];
    }
    return HonorTheElderly;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var LoveNeighborAsSelf = (function (_super) {
    __extends(LoveNeighborAsSelf, _super);
    function LoveNeighborAsSelf() {
        _super.call(this);

        this.shortSummary = "Love your neighbor as yourself.";
        this.text = "Do not seek revenge or bear a grudge against one of your people, but love your neighbor as yourself.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 18;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = CommandmentObedience.Attempted;
        this.messianicObservance = CommandmentObedience.Attempted;
        this.jewishObservance = CommandmentObedience.Attempted;
        this.number = 13;

        this.children = [
            new HonorTheElderly(), new LoveSojourners(), new DontHateBrother()
        ];
    }
    return LoveNeighborAsSelf;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
// Big discussion on this here: http://judahgabriel.blogspot.com/2009/10/judaisms-alien-conversion-program.html
var LoveSojourners = (function (_super) {
    __extends(LoveSojourners, _super);
    function LoveSojourners() {
        _super.call(this);

        this.shortSummary = "Love the sojourner among you.";
        this.text = "And you are to love those who are aliens, for you yourselves were aliens in Egypt.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 10;
        this.verse = 19;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false; // Tough to say. It's intended for Israel's citizens, directing them to treat foreigners kindly.
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 14;

        this.children = [];
    }
    return LoveSojourners;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var RebukeFrankly = (function (_super) {
    __extends(RebukeFrankly, _super);
    function RebukeFrankly() {
        _super.call(this);

        this.shortSummary = "Rebuke frankly.";
        this.text = "Rebuke your neighbor frankly so you will not share in his guilt.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 17;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 16;

        this.children = [];
    }
    return RebukeFrankly;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var KeepAllGodsCommandments = (function (_super) {
    __extends(KeepAllGodsCommandments, _super);
    function KeepAllGodsCommandments() {
        _super.call(this);

        this.shortSummary = "Keep all God's commandments.";
        this.text = "The LORD will establish you as his holy people, as he promised you on oath, if you keep the commands of the LORD your God and walk in his ways.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 28;
        this.verse = 9;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 1 /* Recognized */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 11;
    }
    return KeepAllGodsCommandments;
})(CommandmentBase);
var CommandmentType;
(function (CommandmentType) {
    CommandmentType[CommandmentType["Positive"] = 0] = "Positive";
    CommandmentType[CommandmentType["Negative"] = 1] = "Negative";
})(CommandmentType || (CommandmentType = {}));
var CommandmentObedience;
(function (CommandmentObedience) {
    /*
    * No obedience to the commandment is believed to be necessary.
    */
    CommandmentObedience[CommandmentObedience["None"] = 0] = "None";

    /*
    * The commandment is generally recognized as binding, but not widely practiced. Frequently, this public acknowledgement comes in the form of preaching, homilies, etc.
    */
    CommandmentObedience[CommandmentObedience["Recognized"] = 1] = "Recognized";

    /*
    * The commandment is recognized is binding and applicable.
    */
    CommandmentObedience[CommandmentObedience["Binding"] = 2] = "Binding";
})(CommandmentObedience || (CommandmentObedience = {}));
var TorahBook;
(function (TorahBook) {
    TorahBook[TorahBook["Exodus"] = 0] = "Exodus";
    TorahBook[TorahBook["Leviticus"] = 1] = "Leviticus";
    TorahBook[TorahBook["Numbers"] = 2] = "Numbers";
    TorahBook[TorahBook["Deuteronomy"] = 3] = "Deuteronomy";
})(TorahBook || (TorahBook = {}));
//# sourceMappingURL=mitzvotmash.js.map
