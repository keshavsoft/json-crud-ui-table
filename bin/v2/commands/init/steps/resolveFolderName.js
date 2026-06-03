import fs from "fs";

export default function resolveFolderName({ name, defaultFolerName = "IndexV1" }) {
    if (name === null) {
        name = defaultFolerName;
    };

    // case 2: user provided → strict
    if (fs.existsSync(name)) {
        throw new Error(`Folder already exists: ${name}`);
    };

    return name;
};