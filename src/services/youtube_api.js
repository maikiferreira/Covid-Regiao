import axios from "axios";

// chaves da api do Youtube
const KEY = "AIzaSyAD9e81G9Y1C2-LfDjQ2r_w5dbqPxS8u7s";
//const KEY = "AIzaSyCZD8NiDp7KTpzJkObRFFYkX6dQ2-sB3jo";

/*
    Exportando função do axios para definir parâmetros
    iniciais para consumir a api do youtube.
*/
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part : "snippet",
        maxResult : 5,
        key : KEY
    },
    headers : {}
});