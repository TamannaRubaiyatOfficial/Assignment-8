const getStoredData = () => {
    const storedData = localStorage.getItem('appList');

    if (storedData) {
        const convertedData = JSON.parse(storedData);
        return convertedData;
    }
    else {
        return [];
    }
}

const addStoredData = (id) => {
    const storedData = getStoredData();

    if (!storedData.includes(id)) {
        storedData.push(id);
        const newAddedApp = JSON.stringify(storedData);
        localStorage.setItem('appList', newAddedApp);
    }
}

export { addStoredData, getStoredData };