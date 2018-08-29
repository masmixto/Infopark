var id = parseInt(window.location.search.substr(1));
var url = "https://swapi.co/api/people/";
var fullUrl = url+id+'/';

$(document).ready(function() {
        checkIfIdIsCorrect();
        putSpinner();
        $.getJSON(fullUrl, function(character) {
            getSpecies(character);
        });
});

function injectData(character, species){
    turnOffSpinner();
    $('.panel-heading').append(character.name);

    $('.panel-body').append(
        "<div>Birth: <span>"+character.birth_year
        +"</span></div>"
        +"<div>Gender: <span>"+character.gender
        +"</span></div>"
        +"<div>Height: <span>"+character.height
        +"</span></div>"
        +"<div>Mass: <span>"+character.mass
        +"</span></div>"
        +"<div>Species name: <span>"+species.name
        +"</span></div>"
        +"<div>Species language: <span>"+species.language
        +"</span></div>"
    );
}

function getSpecies(character){
    $.getJSON(character.species[0], function(data) {
        injectData(character, data);
    });
}

function checkIfIdIsCorrect(){
    if(!(id>0)){
        error();
    }
}

function turnOnSpinner(){
    $("#cover-spin").css('display','block');
}

function turnOffSpinner(){
    $('#cover-spin').css('display','none');
}


function error(){
    alert('error, wrong GET value');
}
