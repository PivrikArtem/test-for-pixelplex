const headers = {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'accept': 'application/json'
};
const ipUrl = 'https://repetitora.net/api/JS/Tasks';
const corsMode = 'cors';

function requestData(url, type, body) {
    return fetch(url, {
        method: type,
        body: body,
        headers: headers,
        mode: corsMode

    })
        .then(result => result.json());
}

export default function createTask(title, widgetId) {

    const data = new URLSearchParams();
    
    data.append('title', title);
    data.append('widgetId', widgetId)

    return requestData(ipUrl, 'POST', data);
}

export function removeTask(taskId, widgetId) {

    const data = new URLSearchParams();
    
    data.append('taskId', taskId);
    data.append('widgetId', widgetId)

    return requestData(ipUrl, 'DELETE', data);
}

export function getTasks(widgetId) {
    return requestData(`${ipUrl}?widgetId=${widgetId}&count=30`, 'GET', null);
}


