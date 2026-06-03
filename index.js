import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async (cmd) => {
    const v = getLatestVersion();

    return (await import(
        `./bin/${v}/commands/${cmd}.js`
    )).default;
};

const showAll = async (...a) =>
    (await load("showAll"))(...a);

const showAllWithSerial = async (...a) =>
    (await load("showAllWithSerial"))(...a);

export { load, showAll, showAllWithSerial };