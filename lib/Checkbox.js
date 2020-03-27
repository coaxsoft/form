"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_hook_form_1 = require("react-hook-form");
var FormElementWrapper_1 = require("./FormElementWrapper");
var Checkbox = function (props) {
    var name = props.name, className = props.className;
    var _a = react_hook_form_1.useFormContext(), register = _a.register, errors = _a.errors;
    // classNames
    var classNames = ["coax-form--el"];
    if (className)
        classNames.push(className);
    if (errors[name])
        classNames.push("coax-form--el__error");
    return (React.createElement("div", null,
        React.createElement("input", { id: name, className: classNames.join(" "), name: name, ref: register, type: "checkbox" }),
        React.createElement("label", { htmlFor: name }, props.children || null)));
};
exports.default = FormElementWrapper_1.default(Checkbox);
