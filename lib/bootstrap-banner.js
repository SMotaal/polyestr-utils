/// <reference path="./bootstrap.d.ts" />

/** @type {bootstrap.BannerLogger} */
const { log } = require('./bootstrap');

/** @type {bootstrap.BannerFunction} */
const banner = (
    details,
    logger = log,
    {
        displayName, name, version, license, author,
        banner = (
            typeof details === 'string'
                ? details
                : [(displayName || name || '').trim().toUpperCase(), version && `v${version}`.toLowerCase(), license && `(${license})`, author].filter(Boolean).join(' ').trim()
        ),
    } = details
) => {
    banner = typeof banner === 'string' && (banner = banner.trim()) || '';
    banner && typeof logger === 'function' && logger(`\n${banner}`);
    return banner;
};

module.exports = banner;
