var url = "https://swapi.co/api/people/";
var characters;

$(document).ready(function() {
        putSpinner();
        $.getJSON(url, function(data) {
            readValues(data);
        });
});

function readValues(data)
{
    characters = data.results;
    preapeareIdForCharacter(characters);
    appendCharactersToTable(characters);
}

function preapeareIdForCharacter(characters)
{
    var i = 1;
    characters.forEach(function(character){
        character.id = i;
        i++;
    });
}

function appendCharactersToTable(characters)
{
    characters.forEach(function(character){
        appenCharacter(character);
    });
}

function appenCharacter(character, i){
    turnOffSpinner();
    $('#starWarsTable').append("<tr class='character'><td>"+character.name
                            +"</td><td>"+character.height
                            +"</td><td>"+character.mass
                            +"</td><td>"+character.hair_color
                            +"</td><td id="+character.id+"><a href='character.html?"+character.id+"' class='x' id="+character.id+">See more</a></td></tr>");
}

$(document).ready(function(){
    $("#sort").on('click', function(){
        $(".character").remove();
        var charactersSort = characters.sort(dynamicSort("name"));
        appendCharactersToTable(charactersSort);
    });
});

function dynamicSort(property){
    var sortOrder = 1;
    if(property[0] === "-"){
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b){
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function putSpinner(){
    $("#cover-spin").css('display','block');
}

function turnOffSpinner(){
    $('#cover-spin').css('display','none');
}
