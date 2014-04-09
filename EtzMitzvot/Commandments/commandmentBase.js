var CommandmentBase = (function () {
    function CommandmentBase() {
        this.children = [];
        this.hiddenChildren = null;
    }
    CommandmentBase.prototype.getBookChapterVerse = function () {
        var bookName = this.book === 3 /* Deuteronomy */ ? "Deut." : this.book === 0 /* Exodus */ ? "Ex." : this.book === 1 /* Leviticus */ ? "Lev." : "Num.";
        return bookName + " " + this.chapter + ":" + this.verse;
    };

    CommandmentBase.prototype.getBookString = function () {
        return this.book === 3 /* Deuteronomy */ ? "Deuteronomy" : this.book === 0 /* Exodus */ ? "Exodus" : this.book === 1 /* Leviticus */ ? "Leviticus" : "Numbers";
    };

    Object.defineProperty(CommandmentBase.prototype, "isExpanded", {
        get: function () {
            return this.hiddenChildren === null;
        },
        set: function (value) {
            if (value && this.hiddenChildren != null && this.hiddenChildren.length) {
                this.children = this.hiddenChildren;
                this.hiddenChildren = null;
            } else if (!value && !this.hiddenChildren) {
                this.hiddenChildren = this.children;
                this.children = [];
            }
        },
        enumerable: true,
        configurable: true
    });

    return CommandmentBase;
})();
