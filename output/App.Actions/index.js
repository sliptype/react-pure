// Generated by purs version 0.12.0
"use strict";
var Initial = (function () {
    function Initial() {

    };
    Initial.value = new Initial();
    return Initial;
})();
var Increment = (function () {
    function Increment(value0) {
        this.value0 = value0;
    };
    Increment.create = function (value0) {
        return new Increment(value0);
    };
    return Increment;
})();
var Decrement = (function () {
    function Decrement(value0) {
        this.value0 = value0;
    };
    Decrement.create = function (value0) {
        return new Decrement(value0);
    };
    return Decrement;
})();
module.exports = {
    Initial: Initial,
    Increment: Increment,
    Decrement: Decrement
};
