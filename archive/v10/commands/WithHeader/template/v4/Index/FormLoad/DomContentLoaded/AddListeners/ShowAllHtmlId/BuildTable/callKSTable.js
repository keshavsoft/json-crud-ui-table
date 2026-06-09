export const callKSTable = async (config) => {
    if (window?.KSTable?.initShowTable) {
        return window.KSTable.initShowTable(config);
    }

    const { initShowTable } = await import("/KSTable/v7/entry.js");

    return initShowTable(config);
};