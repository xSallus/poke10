import axios from 'axios'

const baseURL = 'https://pokeapi.co/api/v2'

export const api = axios.create({ baseURL })
