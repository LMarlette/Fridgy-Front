import axios from 'axios';
// import Header from '../Components/headerComponent/header';
export var localInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});