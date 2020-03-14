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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_hook_form_1 = require("react-hook-form");
var Form = function (props) {
    var defaultValues = props.defaultValues, validationSchema = props.validationSchema, onSubmit = props.onSubmit, children = props.children;
    var methods = react_hook_form_1.useForm({ defaultValues: defaultValues, validationSchema: validationSchema });
    return (React.createElement(react_hook_form_1.FormContext, __assign({}, methods),
        React.createElement("form", { onSubmit: methods.handleSubmit(onSubmit) }, children)));
};
exports.default = Form;
