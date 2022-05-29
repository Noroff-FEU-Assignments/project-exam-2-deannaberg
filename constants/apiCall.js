import { BASE_URL, WOO_COMMERCE_KEY, WOO_COMMERCE_SECRET } from './api';


export const WooApi = (endpoint) => {
    return `${BASE_URL}/${endpoint}?${WOO_COMMERCE_KEY}&${WOO_COMMERCE_SECRET}`
}