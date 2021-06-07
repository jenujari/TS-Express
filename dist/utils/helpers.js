"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const ErrorResponse = (res, code, message) => {
    res.status(code).send(http_errors_1.default(code, message));
};
exports.ErrorResponse = ErrorResponse;
//# sourceMappingURL=helpers.js.map