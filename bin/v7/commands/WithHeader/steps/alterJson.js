import fs from "fs";
import path from "path";

export const createProject = ({ source, inDestination, inToPath, tableName }) => {
    const data = fs.readFileSync(path.join(inToPath, "Config", "Schemas", `${tableName}.json`));
    const dataAsJson = JSON.parse(data);
    const configFromSource = dataAsJson.columnsConfig;
    // console.log("inDestination  : ", dataAsJson.columnsConfig);

    const dataSource = path.join(inDestination, "Index", "Configs", "ShowAll", "config.json");

    const configData = fs.readFileSync(dataSource);
    const configDataAsJson = JSON.parse(configData);
    // console.log("configDataAsJson  : ", configDataAsJson.columnsConfig);
    configDataAsJson.columnsConfig = configFromSource;

    fs.writeFileSync(dataSource, JSON.stringify(configDataAsJson));


    // fs.cpSync(source, destination, { recursive: true });
};

export default createProject;