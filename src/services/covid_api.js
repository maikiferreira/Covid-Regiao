import axios from 'axios';

/*
    Exportando função do axios para definir parâmetros
    iniciais para consumir a api do Covid.
*/
const covidApi = axios.create({
    baseURL: 'https://api.covid19api.com',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});

export default covidApi;