"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_hook_form_1 = require("react-hook-form");
var FormElementWrapper_1 = require("./FormElementWrapper");
var Input = function (props) {
    var name = props.name, className = props.className, rest = __rest(props, ["name", "className"]);
    var _a = react_hook_form_1.useFormContext(), register = _a.register, errors = _a.errors;
    // classNames
    var classNames = ["coax-form--el"];
    if (className)
        classNames.push(className);
    if (errors[name])
        classNames.push("coax-form--el__error");
    return (React.createElement("input", __assign({ className: classNames.join(" "), name: name, ref: register }, rest)));
};
exports.default = FormElementWrapper_1.default(Input);
