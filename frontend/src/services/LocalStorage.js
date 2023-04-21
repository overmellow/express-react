const saveData = (key, value) => {
    localStorage.setItem(key, value);
}

const getData = (key) => {
    return localStorage.getItem(key);
}

const removeData = (key) => {
    return localStorage.removeItem(key);
}

const removeAll = () => {
    return localStorage.clear();
}

export { saveData, getData, removeData, removeAll }