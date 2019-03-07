import axios from 'axios';

export default axios.create({ //create a customized request instance
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID 178b14decf1f9dae052cbecd4ec5c9b2068e8f3ba75ae5f75c959c35520332ae" 
    }
})