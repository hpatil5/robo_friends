import {CHANGE_SEARCH_FIELD} from './Constants'

export const setSerachFiled = (text) => ({
    type : CHANGE_SEARCH_FIELD,
    payload : text
})