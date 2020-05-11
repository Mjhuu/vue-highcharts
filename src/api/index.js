import ajax from "./ajax";

const BASE_URL = 'http://localhost:5050';

export const fetchData = data => ajax(BASE_URL+ '/fetchData', data);
export const postData = data => ajax(BASE_URL+ '/postData', data, 'post');
export const postDataJson = data => ajax(BASE_URL+ '/postData', data, 'post', 'json');
