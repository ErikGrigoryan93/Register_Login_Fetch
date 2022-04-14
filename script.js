import Fetch from "./fetch.js";

const userFetch = new Fetch('https://api-nodejs-todolist.herokuapp.com/user');
const taskFetch = new Fetch('https://api-nodejs-todolist.herokuapp.com/task');

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');