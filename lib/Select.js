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
var Select = function (props) {
    var name = props.name, className = props.className, options = props.options, hasError = props.hasError, rest = __rest(props, ["name", "className", "options", "hasError"]);
    var register = react_hook_form_1.useFormContext().register;
    // classNames
    var classNames = ["coax-form--el"];
    if (className)
        classNames.push(className);
    if (hasError)
        classNames.push("coax-form--el__error");
    return (React.createElement("select", __assign({ className: classNames.join(" "), name: name, ref: register }, rest), options.map(function (item) {
        var value = typeof item === "object" ? item.value : item;
        var label = typeof item === "object" ? item.label : item;
        return (React.createElement("option", { key: value, value: value }, label));
    })));
};
exports.default = FormElementWrapper_1.default(Select);
