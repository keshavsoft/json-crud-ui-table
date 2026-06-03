import { locateSource } from "./WithHeader/steps/locateSource.js";
import { locateDestination } from "./WithHeader/steps/locateDestination.js";

import { createProject } from "./WithHeader/steps/createProject.js";
import { announce } from "./WithHeader/steps/announce.js";

import resolveFolderName from "./WithHeader/steps/resolveFolderName.js";
import checks from "./WithHeader/steps/checks.js";

import alterJson from "./WithHeader/steps/alterJson.js";

export default ({
    folderName = "",
    toPath = process.cwd(),
    inAnnounce = true,
    showLog = "false",
    inAlterConfig = true,
    tableName
}) => {
    if (showLog.trim() === "true") console.log("Resolving folder name...");

    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    if (showLog.trim() === "true") console.log(`resolvedFolderName : ${resolvedFolderName}`);

    const fromChecks = checks({
        toPath,
        inAnnounce,
        inFolderName: resolvedFolderName,
        showLog
    });

    if (fromChecks) return false;

    if (showLog.trim() === "true") console.log("Locating source...");

    const source = locateSource({
        showLog
    });

    if (showLog.trim() === "true") console.log(`Source is : ${source}`);
    if (showLog.trim() === "true") console.log("Locating destination...");

    const destination = locateDestination({
        inToPath: toPath,
        inResolvedFolderName: resolvedFolderName,
        showLog
    });

    if (showLog.trim() === "true") console.log(`Destination is : ${destination}`);
    if (showLog.trim() === "true") console.log("Creating project...");

    createProject({
        source,
        destination,
        showLog
    });

    if (showLog.trim() === "true") console.log("Alter config started...");

    if (inAlterConfig) {
        alterJson({
            inDestination: destination,
            inToPath: toPath,
            tableName
        });
    };

    if (inAnnounce) {
        if (showLog.trim() === "true") console.log("Announcing...");

        announce({
            inResolvedFolderName: resolvedFolderName,
            showLog
        });
    };
};