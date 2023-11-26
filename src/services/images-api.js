import axios from 'axios'

const API_KEY = '39241528-2523128320a491a5071bc8f9c'
const BASE_URL = 'https://pixabay.com/api'

export const getImages = async (value, pageValue) => {
    const response = await axios({ url: `${BASE_URL}/?key=${API_KEY}&q=${value}&per_page=12&page=${pageValue}`, method: "GET" })
    return response.data.hits
}
