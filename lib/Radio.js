"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_hook_form_1 = require("react-hook-form");
var FormElementWrapper_1 = require("./FormElementWrapper");
var RadioEl = function (props) {
    var name = props.name, value = props.value, register = props.register, className = props.className;
    var label = React.createElement("label", { className: "coax-form--radio-label", htmlFor: name + ":" + value }, value);
    var input = (React.createElement("input", { id: name + ":" + value, className: className, type: "radio", name: name, ref: register, value: value }));
    return (React.createElement("div", { className: "coax-form--radio-block" },
        input,
        label));
};
var Radio = function (props) {
    var name = props.name, className = props.className, value = props.value, values = props.values;
    var _a = react_hook_form_1.useFormContext(), register = _a.register, errors = _a.errors;
    // classNames
    var classNames = ["coax-form--radio-el"];
    if (className)
        classNames.push(className);
    if (errors[name])
        classNames.push("coax-form--radio-el__error");
    var content = [];
    if (value) {
        content.push(React.createElement(RadioEl, { key: "r:" + value, className: classNames.join(" "), name: name, register: register, value: value }));
    }
    else if (values) {
        content = values.map(function (value) {
            return (React.createElement(RadioEl, { key: "r:" + value, className: classNames.join(" "), name: name, register: register, value: value }));
        });
    }
    return (React.createElement("div", { className: "coax-form--radio-wrapper" }, content));
};
exports.default = FormElementWrapper_1.default(Radio);
