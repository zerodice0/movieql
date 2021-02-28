import axios from "axios"

const API_URL = "https://yts.mx/api/v2/list_movies.json?"

export const getMovies = async (limit, rating) => {
  let REQUEST_URL = API_URL
  if (limit > 0) {
    REQUEST_URL += `&limit=${limit}`
  }

  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`
  }

  const result = await axios(REQUEST_URL)
  const data = await result.data

  return data.data.movies
}