const apikey = "aeYvjbM5OcoeBJ6Pz3k70JlvcCifhD67kmBsFyRtkBGXhxQUTIGDCLE9"
const nameButton = document.getElementById("inputName");

var guessedGender = "";

var guessedOrigin = "";

var guessedAge = "";




function predictAge(){
    //let inpName = document.getElementById("inputName");
    let name = nameButton.value;
    
    fetch('https://api.agify.io?name='+ name,{ method:'GET'})
    .then(function(response){return response.json();})
    .then(data => {
        if (name != '') {
            guessedAge = data.age;
            displayAge = data.age;
            console.log(data.age);
        }else{
            console.log("broked age") ; 
        }
        
        
    })
    .catch(err => console.log(err));
}





$(nameButton).click(function(){
    predictAge()
    });

$("#try-again").on("click", function (event) {

        function change_page_again(){
        window.location.replace("index.html");
        }; 
    change_page_again()
    
    
    
});


// function magicBall(){

//     import { createClient } from 'pexels';
    
//     const client = createClient(apikey);
//     const query = guessedAge + "years old" + guessedOrigin + guessedGender;
    
//     client.photos.search({ query, per_page: 1 }).then(photos => {...});
// }
