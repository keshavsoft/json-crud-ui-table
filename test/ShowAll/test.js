import { load } from "../../index.js";

const commandToSend = "ShowAll";

const startFunc = async (...a) =>
    (await load(commandToSend))(...a);

const folderName = process.argv[2];
const showLog = process.argv[3];

startFunc({
    folderName,
    showLog
}).then();