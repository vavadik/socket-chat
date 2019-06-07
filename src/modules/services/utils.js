import { isObject } from 'lodash'

export function findProperty(data, path) {
    let pathArray = path.split(".");
    let propertyName = pathArray.shift();
    if (isObject(data) && propertyName) {
        return findProperty(data[propertyName], pathArray.join("."));
    }
    return data;
}

export function trimChar(s, c) {
    if (c === "]") c = "\\]";
    if (c === "\\") c = "\\\\";
    return s.replace(new RegExp(
        "^[" + c + "]+|[" + c + "]+$", "g"
    ), "");
}

export function encodeQueryData(data) {
    const ret = [];
    for (let d in data) {
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }
    return ret.join('&');
}