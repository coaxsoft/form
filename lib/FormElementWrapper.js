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
var formElementWrapper = function (Component) {
    return function (props) {
        var wrapperClassName = props.wrapperClassName, labelClassName = props.labelClassName, errorClassName = props.errorClassName, label = props.label, horizontal = props.horizontal, name = props.name, innerProps = __rest(props, ["wrapperClassName", "labelClassName", "errorClassName", "label", "horizontal", "name"]);
        var errors = react_hook_form_1.useFormContext().errors;
        // Wrapper className
        var wClassName = ["coax-form--el-holder"];
        if (wrapperClassName)
            wClassName.push(wrapperClassName);
        if (horizontal)
            wClassName.push("coax-form--el-holder__horizontal");
        // Label className
        var lClassName = ["coax-form--el-label"];
        if (labelClassName)
            lClassName.push(labelClassName);
        if (horizontal)
            lClassName.push("coax-form--el-label__horizontal");
        // Error className
        var eClassName = ["coax-form--el-error"];
        if (errorClassName)
            eClassName.push(errorClassName);
        var errorMessage = "";
        if (errors[name])
            errorMessage = errors[name].message;
        return (React.createElement("div", { className: wClassName.join(" ") },
            label && (React.createElement("span", { className: lClassName.join(" ") }, label)),
            React.createElement(Component, __assign({}, innerProps, { name: name })),
            errors[name] && (React.createElement("span", { className: eClassName.join(" ") }, errorMessage))));
    };
};
exports.default = formElementWrapper;
