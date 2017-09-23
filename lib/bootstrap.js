const path = require('path');
const rootPath = __dirname.replace(/\/polyestr(\/.*?|\/?)$/, '/polyestr'); // path.resolve(__dirname, '..', '..');
const modulesPath = path.resolve(rootPath, 'node_modules');

/** @type {polyestr.Loggers} */
const loggers = exports.loggers =
    ['log', 'warn', 'info', 'error'].reduce((
        (loggers, method) => (loggers[method] = console[method].bind(console), loggers)
    ), {});

// const { resolve } = require;

module.exports = Object.assign(exports, { rootPath, modulesPath }, loggers);
