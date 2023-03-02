import axios from "axios";

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID N2Sb8JmquA7NfoVjKrlYgwTzSIIqG2sz6ZSZq2g5zVw'
        }, 
        params: {   
            query: 'cars'
        }

    });
    return response.data.results;
};

export default searchImages;