/// <reference path="./bootstrap.d.ts" />

const path = require('path');
const { inspect } = require('util');
const { modulesPath, info, warn, error } = require('./bootstrap');

const { cache = {}, resolve } = require || {};

const supported = exports.supported = !!(cache && resolve);

module.exports = { supported, loaded: false, local: false, localPath: undefined };

if (exports.supported) {
    const localPath = path.resolve(modulesPath, 'ts-node');
    const cachedPaths = Object.keys(cache);

    let loadedPath = cachedPaths.find(path => path.endsWith('/ts-node/dist/index.js'));
    let loaded = !!loadedPath;

    if (!loaded) {
        info(`\npolyestr-bootstrap: loading ts-node/register since ts-node is required and not correctly specified as a runtime argument.\n`)
        try {
            require(path.resolve(localPath, 'register'));
            loadedPath = resolve(localPath);
            loaded = loadedPath in cache;
        } catch (exception) {
            error(exception);
            loadedPath = '';
            loaded = false;
        }
    }

    const local = loaded && loadedPath.startsWith(localPath);

    if (loaded && !local)
        warn(`\npolyestr-bootstrap: ts-node may have been loaded from a different project's node_modules which can lead in unexpected behaviour.\n`);

    module.exports = { supported, loaded, local: local, localPath };

    if (!loaded) {
        console.log({
            localPath,
            loadedPath,
            loaded,
            local: local,
            // cachedPaths,
        });

        debugger;
    }
}
