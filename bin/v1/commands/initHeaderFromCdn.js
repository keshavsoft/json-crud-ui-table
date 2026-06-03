import { locateSource } from "./initHeaderFromCdn/steps/locateSource.js";
import { locateDestination } from "./initHeaderFromCdn/steps/locateDestination.js";

import { createProject } from "./initHeaderFromCdn/steps/createProject.js";
import { announce } from "./initHeaderFromCdn/steps/announce.js";

import resolveFolderName from "./initHeaderFromCdn/steps/resolveFolderName.js";
import checks from "./initHeaderFromCdn/steps/checks.js";

export default ({
    folderName = "",
    toPath = process.cwd(),
    inAnnounce = true,
    showLog = false
}) => {
    if (showLog) {
        console.log("Resolving folder name...");
    };

    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    if (showLog) {
        console.log(`resolvedFolderName : ${resolvedFolderName}`);
    };

    const fromChecks = checks({
        toPath,
        inAnnounce,
        inFolderName: resolvedFolderName,
        showLog
    });

    if (fromChecks) return false;

    if (showLog) {
        console.log("Locating source...");
    }

    const source = locateSource({
        showLog
    });

    if (showLog) {
        console.log("Locating destination...");
    }

    const destination = locateDestination({
        inResolvedFolderName: resolvedFolderName,
        showLog,
        toPath
    });

    if (showLog) {
        console.log("Creating project...");
    }

    createProject({
        source,
        destination,
        showLog
    });

    if (inAnnounce) {

        if (showLog) {
            console.log("Announcing...");
        }

        announce({
            inResolvedFolderName: resolvedFolderName,
            showLog
        });
    }
};