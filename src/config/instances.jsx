import axios from 'axios';
const dotenv = require('dotenv').load();
const API_KEY = process.env.API_KEY;

export const localInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
export const spoonInstance = axios.create({
  baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/',
  headers: {
    'X-Mashape-Key': API_KEY,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
