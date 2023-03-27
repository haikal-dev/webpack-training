import generateJoke from "./generateJoke";
import './styles/main.scss';
import $ from './js/jquery';

console.log(generateJoke());

$(document).ready(function(){
    $('#app').html(`
        <h1>` + generateJoke() + `</h1>
    `);
});