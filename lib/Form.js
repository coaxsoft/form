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
var usePrevious_1 = require("./hooks/usePrevious");
exports.Form = React.forwardRef(function (props, ref) {
    var mode = props.mode, defaultValues = props.defaultValues, validationSchema = props.validationSchema, onSubmit = props.onSubmit, children = props.children, className = props.className, serverErrors = props.serverErrors, onChange = props.onChange, listen = props.listen;
    var methods = react_hook_form_1.useForm({ mode: mode, defaultValues: defaultValues, validationSchema: validationSchema });
    // Pass control methods to form holder
    React.useImperativeHandle(ref, function () { return ({
        reset: methods.reset,
        setValue: methods.setValue,
        setError: methods.setError,
        getValues: methods.getValues
    }); });
    // Set errors from server validation
    var previousServerErrors = usePrevious_1.default(serverErrors);
    React.useEffect(function () {
        // Don't reset error if values didn't change
        if (serverErrors && previousServerErrors &&
            JSON.stringify(previousServerErrors) !== JSON.stringify(serverErrors)) {
            Object.entries(serverErrors).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                var errorText = value;
                if (Array.isArray(value))
                    errorText = value.join(" ");
                methods.setError(key, errorText);
            });
        }
    }, [serverErrors]);
    // Listen to changes in fields
    if (listen && typeof onChange === "function") {
        var newValues_1 = methods.watch((Array.isArray(listen) && listen.length) ? listen : undefined);
        var oldValues_1 = usePrevious_1.default(newValues_1);
        React.useEffect(function () {
            // Don't trigger on initial load
            // Don't trigger if values are the same
            if (oldValues_1 && Object.keys(oldValues_1).length &&
                JSON.stringify(newValues_1) !== JSON.stringify(oldValues_1)) {
                onChange(newValues_1, {
                    reset: methods.reset,
                    setValue: methods.setValue,
                    setError: methods.setError
                });
            }
        }, [newValues_1, oldValues_1]);
    }
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
