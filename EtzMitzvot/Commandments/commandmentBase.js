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
    CommandmentBase.prototype.getShortSummaryParts = function () {
        return this.shortSummary.split("<br />");
    };
    CommandmentBase.prototype.getObservanceText = function (group, observance) {
        return observance === 0 /* None */ ? "<span class=\"text-danger\">Disregarded. " + group + " do not keep it.</span>" : observance === 1 /* Recognized */ ? "<span class=\"text-warning\">Recognized. " + group + " recognize it as binding, but do not widely practice it.</span>" : observance === 2 /* RecognizedButPrevented */ ? "<span class=\"text-warning\">Accepted. " + group + " consider it binding, but can't practice it for external reasons.</span>" : "<span class=\"text-success\">Binding. " + group + " consider it binding and widely practice it.</span>";
    };
    CommandmentBase.prototype.getChildrenOrHidden = function () {
        if (this.hiddenChildren) {
            return this.hiddenChildren;
        }
        if (this.children) {
            return this.children;
        }
        return [];
    };
    Object.defineProperty(CommandmentBase.prototype, "isExpanded", {
        get: function () {
            return this.hiddenChildren === null;
        },
        set: function (value) {
            if (value && this.hiddenChildren != null && this.hiddenChildren.length) {
                this.children = this.hiddenChildren;
                this.hiddenChildren = null;
            }
            else if (!value && !this.hiddenChildren) {
                this.hiddenChildren = this.children;
                this.children = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    return CommandmentBase;
})();
