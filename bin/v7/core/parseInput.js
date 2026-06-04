export default function parseInput() {
    const [cmd, folderName, tableName, showLog] = process.argv.slice(2);
    console.log("cmd, folderName, tableName, showLog : ", cmd, folderName, tableName, showLog);

    return {
        cmd: cmd || null,
        folderName: folderName || null,
        tableName: tableName || null,
        showLog: showLog || null,
        toPath: process.cwd()
    };
};