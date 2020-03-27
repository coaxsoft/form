"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var index_1 = require("./index");
var Entry = function () {
    var onSubmit = function (values) {
    };
    return (React.createElement("div", null,
        "Form",
        React.createElement(index_1.Form, { onSubmit: onSubmit },
            React.createElement(index_1.Input, { name: "a", type: "number", wrapperClassName: "smth" }),
            React.createElement(index_1.Select, { name: "b", className: "smth", options: [{ label: 1, value: 1 }, { label: "1", value: "1" }] }),
            React.createElement(index_1.Radio, { name: "c", value: "yes" }),
            React.createElement(index_1.Checkbox, { name: "d" }, "Checkbox"))));
};
