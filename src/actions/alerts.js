import axios from 'axios';
import { CREATE_MESSAGES } from './types';

const mainUrl = 'http://127.0.0.1:8000';

export const createMessages = msg => {
    return {
        type: CREATE_MESSAGES,
        payload: msg
    }
            
}