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
exports.Form = React.forwardRef(function (props, ref) {
    var defaultValues = props.defaultValues, validationSchema = props.validationSchema, onSubmit = props.onSubmit, children = props.children, className = props.className, serverErrors = props.serverErrors;
    var methods = react_hook_form_1.useForm({ defaultValues: defaultValues, validationSchema: validationSchema });
    React.useImperativeHandle(ref, function () { return ({
        reset: methods.reset,
        setValue: methods.setValue,
        setError: methods.setError,
        getValues: methods.getValues
    }); });
    // Set errors from server validation
    React.useEffect(function () {
        if (!serverErrors)
            return;
        Object.entries(serverErrors).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            var errorText = value;
            if (Array.isArray(value))
                errorText = value.join(" ");
            methods.setError(key, errorText);
        });
    }, [serverErrors]);
    // Methods
    var onFormSubmit = function (values) {
        var actions = {
            reset: methods.reset,
            setValue: methods.setValue,
            setError: methods.setError
        };
        onSubmit(values, actions);
    };
    var formClassNames = ["coax-form"];
    if (className)
        formClassNames.push(className);
    return (React.createElement(react_hook_form_1.FormContext, __assign({}, methods),
        React.createElement("form", { className: formClassNames.join(" "), onSubmit: methods.handleSubmit(onFormSubmit) }, children)));
});
