import path from "path";

export const locateDestination = ({ toPath, inResolvedFolderName }) => {
    return path.join(toPath, inResolvedFolderName);
};