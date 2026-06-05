import fs from "fs";
import path from "path";

const readJson = (filePath) => {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

const writeJson = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
};

const getSchemaConfig = ({ fromConfigPath, tableName, showLog }) => {
    const schemaPath = path.join(
        fromConfigPath,
        `${tableName}.json`
    );

    const schemaPathAsJson = readJson(schemaPath);

    if (showLog) if (!"columnsConfig" in schemaPathAsJson) console.log("columnsConfig not found in schema source");

    return schemaPathAsJson?.columnsConfig;
};

const getShowAllConfigPath = ({ inDestination }) => {
    return path.join(
        inDestination,
        "Index",
        "Configs",
        "ShowAll",
        "config.json"
    );
};

const updateColumnsConfig = ({ configPath, columnsConfig }) => {
    const config = readJson(configPath);

    config.columnsConfig = columnsConfig;

    writeJson(configPath, config);
};

export const alterJson = ({ inDestination, inToPath, tableName, fromConfigPath, showLog = false }) => {
    // console.log("------------ : ", inDestination, inToPath, tableName);

    const columnsConfig = getSchemaConfig({ fromConfigPath, tableName, showLog });

    const configPath = getShowAllConfigPath({ inDestination });

    updateColumnsConfig({
        configPath,
        columnsConfig
    });
};

export default alterJson;