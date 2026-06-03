import getLatestVersion from "../../bin/core/getLatestVersion.js";

const commandToSend = "initHeaderFromCdn";

const load = async () => {
    const v = getLatestVersion();

    return import(`../../bin/${v}/commands/${commandToSend}.js`);
};

const startFunc = async () => {
    const { default: run } = await load();

    const folderName = process.argv[2];
    const showLog = process.argv[3];

    run({
        folderName,
        showLog
    });
};

startFunc().then();