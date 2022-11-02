import { get, post } from './request.js';

// header
export const API_header = () => {
    let url = '/header.json';
    return get(url);
}