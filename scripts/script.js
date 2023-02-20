
let nameButton = document.getElementById("nameBtn");
let name = nameButton.value;
let Url = "https://leah-harden.github.io/What-the-Magic-Ball-see/"
let completeUrl = Url + ""

$(nameButton).click(function(event){
    event.preventDefault()
        function change_page(){
            document.location.pathname("page-two.html");
        }; 
        change_page()



    });



