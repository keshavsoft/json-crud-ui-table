import fs from "fs";
import path from "path";

const readJson = (filePath) => {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

const writeJson = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
};

const getSchemaConfig = ({ inToPath, tableName }) => {
    const schemaPath = path.join(
        inToPath,
        "Config",
        "Schemas",
        `${tableName}.json`
    );

    return readJson(schemaPath).columnsConfig;
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

export const alterJson = ({ inDestination, inToPath, tableName }) => {
    console.log("------------ : ", inDestination, inToPath, tableName);

    const columnsConfig = getSchemaConfig({ inToPath, tableName });

    const configPath = getShowAllConfigPath({ inDestination });

    updateColumnsConfig({
        configPath,
        columnsConfig
    });
};

export default alterJson;