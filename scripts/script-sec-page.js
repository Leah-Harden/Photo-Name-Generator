const apiKeyPhoto = "aeYvjbM5OcoeBJ6Pz3k70JlvcCifhD67kmBsFyRtkBGXhxQUTIGDCLE9"
const nameButton = document.getElementById("inputName");
let currentUrl = window.location.href 
var splitUrl = currentUrl.split('?');
console.log(splitUrl[1])
let currentName = splitUrl[1];
let guessedGender = "";
let guessedOrigin = "";
let guessedAge = "";
let correctOrigin = "";
let trueOrigin = "";
let photo = "";

function predict(){
//age part
    fetch('https://api.agify.io?name='+ currentName,{ method:'GET'})
    .then(function(response){return response.json();})
    .then(data => {
        if (currentName != '') {
            guessedAge = data.age;
            document.getElementById("displayAge").textContent = data.age;
            console.log(guessedAge);
        }else{
            console.log("broked age") ; 
        }
        
        
    })
    .catch(err => console.log(err));
//age part
//Origin part
    fetch('https://api.nationalize.io?name='+ currentName,{ method:'GET'})
    .then(function(response){return response.json();})
    .then(data => {
        if (currentName != '') {
            console.log(data)
            guessedOrigin = data.country[0].country_id;
            //document.getElementById("displayOrigin").textContent = data.country[0].country_id;
            //translateOrigin(guessedOrigin) 
            console.log(guessedOrigin);
            let partWay = guessedOrigin.toString()
            correctOrigin = partWay.toLowerCase()
            console.log(correctOrigin);
            tranlateCC()
        }else{
            console.log("broked origin") ; 
        }    
    })
    
    .catch(err => console.log(err));


        function tranlateCC(){
            fetch("https://restcountries.com/v3.1/alpha/"+ correctOrigin,{ method:'GET'})
            .then(function(response){return response.json();})
            .then(data => {
                if (currentName != '') {
                    console.log(data)
                    trueOrigin = data[0].altSpellings[1];
                    console.log(trueOrigin)
                    document.getElementById("displayOrigin").textContent = trueOrigin
                    //translateOrigin(guessedOrigin) 
                    //console.log(countryName);
                }else{
                    console.log("broked age") ; 
                }    
            })
            
        }
//Origin part
//Gender part
    fetch('https://api.genderize.io?name=' + currentName,{ method:'GET'})
    .then(function(response){return response.json();})
    .then(data => {
        if (currentName != '') {
            guessedGender = data.gender;
            document.getElementById("displayGender").textContent = data.gender;
            
            console.log(guessedGender);
        }else{
            console.log("broked gender") ; 
        }
        magicBall()
        
        
    })
    .catch(err => console.log(err));
//Gender part
}
predict()

$("#try-again").on("click", function (event) {
        function change_page_again(){
        window.location.replace("index.html");
        }; 
    change_page_again()
});


async function magicBall(){
    const persona = guessedAge +" "+"years old" + " "+ guessedGender +" "+ "from" + " "+ trueOrigin;
    console.log(persona)
    var response = await fetch(`https://api.pexels.com/v1/search?query=${persona}&total_results=1`,{
        method: "GET",
        headers:{
            Accept:"application/json",
            Authorization: apiKeyPhoto,
        }
    })
let data = await response.json();

    console.log(data)   
        var p = Math.floor(Math.random() * 16)
    photo = data.photos[p].src.original;
    
    $("#personPhoto").attr("src", photo)
   // function makePhoto(){
        //let image = `
    //<img src="${data.photos[0].src.original}" height="500px"/>
    //`
//}
//makePhoto()
console.log("worked")
}
