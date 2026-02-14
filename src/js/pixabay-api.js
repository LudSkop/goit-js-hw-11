//getImagesByQuery(query). 
// Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком), 
// здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.

import axios from "axios";


const API_KEY = "54654326-693c693fec20ccb1a66ef61d3";

export function getImagesByQuery(query) {
    const URL = "https://pixabay.com/api/";
  
    return axios.get(URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        }
    })
       
    .then(response => {
        console.log("photo:",response.data)
        return response.data;
    })
    .catch(error =>
        console.log(error)
    )
        
};





